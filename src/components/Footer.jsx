import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <img
          src="/images/logo.jpg"
          alt=""
          className="w-auto h-6 md:h-16 object-contain mx-auto"
        />
        <p className="text-slate-600">Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
