const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-80 text-center p-4">
      <div className="flex justify-center">
        <p className="px-4">
          &copy; {new Date().getFullYear()} Tirpok Cleaners
        </p>
        <p className="px-4">36 Old Highway 22, Clinton, NJ 08809</p>
        <p>Contact Us: (908) 735-8115</p>
      </div>
    </footer>
  );
};

export default Footer;
