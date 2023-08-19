const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-6 mt-12 border-t border-gray-200   ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-800 font-semibold ">
          Marco Aguero - Publitas Assignment&copy; {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
