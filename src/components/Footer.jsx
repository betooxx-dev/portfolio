import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white bg-[#121212]">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="w-auto h-12 object-contain"
            />
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://x.com/betooxx_dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alberto-avendaño" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com/betooxx.dev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@betooxx.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTiktok size={24} />
            </a>
            <a href="https://github.com/betooxx-dev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.youtube.com/betooxxdev" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Derechos de autor */}
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} José Alberto Avendaño Argueta. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;