import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { AddressInfo } from "net";
import * as net from "net";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Improved dynamic port discovery and management
  const findAvailablePort = async (startPort: number): Promise<number> => {
    let port = startPort;
    const maxPort = startPort + 100; // Try up to 100 ports after the start port
    
    return new Promise<number>((resolve) => {
      const tryPort = () => {
        // Create a separate server for testing port availability
        const tempServer = net.createServer();
        
        tempServer.once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE' || err.code === 'EACCES') {
            port++;
            if (port <= maxPort) {
              tryPort();
            } else {
              // If all ports are taken, let the OS assign one
              resolve(0);
            }
          }
        });
        
        tempServer.once('listening', () => {
          const address = tempServer.address();
          const foundPort = typeof address === 'object' && address ? address.port : port;
          
          // Close the server and resolve with the port
          tempServer.close(() => {
            resolve(foundPort);
          });
        });
        
        // Try to listen on the port
        tempServer.listen(port, 'localhost');
      };
      
      tryPort();
    });
  };
  
  const preferredPort = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const availablePort = await findAvailablePort(preferredPort);
  
  // Store the port in app locals so it can be used by Vite
  app.locals.port = availablePort;
  
  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  server.listen(availablePort, 'localhost', () => {
    const address = server.address() as AddressInfo;
    log(`Server running at http://localhost:${address.port}`);
  });
})();
