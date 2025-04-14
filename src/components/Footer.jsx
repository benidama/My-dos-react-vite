import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center w-full bg-[#555555] gap-6 sm:h-44 md:h-36">
      <div className="flex md:flex-row sm:flex-col justify-around items-center w-1/2">
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center gap-2">
            <Link
              to="https://facebook.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              className="bg-[#F8F9FA] rounded text-sm w-5 text-center hover:bg-blue-700"
            >
              𝕏
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <p className="text-left text-[#E6E6FA]">Flow us</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-[#E6E6FA]">Send me tips,trends, update & offers</p>
          <form className="flex justify-center bg-[#9894B1] rounded-md">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FFB6C1] text-white rounded-md hover:bg-blue-700 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#E6E6FA] text-sm">
          SalonFlow is part of SalonFlow Inc, the leading online platform for
          salon booking and time-saving services.
        </p>
        <p className="text-[#E6E6FA] text-sm">
          Copyright &copy; {year} SalonFlow.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
