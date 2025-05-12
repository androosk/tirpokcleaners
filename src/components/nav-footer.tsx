const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-80 text-center p-4">
      <div className="flex justify-center flex-col md:flex-row">
        <p className="px-4 py-3">
          &copy; {new Date().getFullYear()} Tirpok Cleaners
        </p>
        <p className="px-4 py-3">
          {" "}
          <a
            href="https://www.google.com/maps/dir/''/36+Old+Hwy.+22/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c38b0ee326a699:0x88a132edbf07c800?sa=X&ved=0ahUKEwigjOeJnqvNAhVU7WMKHSPHAN4Q9RcIdjAL"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            36 Old Highway 22, Clinton, NJ 08809
          </a>
        </p>
        <p className="py-3">
          Contact Us:{" "}
          <a
            href="tel:9087358115"
            className="text-blue-500 hover:text-blue-700"
          >
            (908) 735-8115
          </a>
        </p>
      </div>
      <p className="pt-3 flex flex-col md:flex-row justify-center">
        Created with ❤️ by&nbsp;
        <a
          href="https://www.thirdandrewcreative.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Third Andrew Creative Agency
        </a>
      </p>
    </footer>
  );
};

export default Footer;
