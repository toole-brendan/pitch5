type SlideProps = {
  title: string;
  children: React.ReactNode;
};

const Slide: React.FC<SlideProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen w-full p-6 md:p-12">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Slide;
