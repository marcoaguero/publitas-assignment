const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-6 mt-12 border-t border-gray-200   ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 font-light mb-2 ">
          Thanks for visiting this website
        </p>
        <p className="text-gray-800 font-semibold ">Dugsiiye &copy; {year}</p>
      </div>
    </div>
  );
};

export default Footer;
