import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { MdLightMode, MdLanguage } from "react-icons/md";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("English");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-row justify-around items-center w-full h-16 bg-[#F8F9FA]">
      <h1 className="text-black font-bold cursor-pointer">SALON FLOW</h1>
      <ul className="flex flex-row space-x-3">
        <li className="flex flex-row justify-center items-center relative">
          <MdLanguage className="text-black text-3xl pr-1 cursor-pointer" />
          <p className="text-[#555555] font-medium text-[20px]">
            <span className="text-[#555555] cursor-pointer">{name}</span>
          </p>
          <button
            className="w-10 h-6 flex flex-col justify-center items-center absolute -right-7"
            onClick={handleOpen}
            aria-expanded={isOpen}
            aria-label="Toggle language dropdown"
          >
            {isOpen ? (
              <ChevronDown className="w-10 h-6 text-[#555555] hover:text-[#17a2b8] cursor-pointer" />
            ) : (
              <ChevronUp className="w-10 h-6 text-[#555555] hover:text-[#17a2b8] cursor-pointer" />
            )}
          </button>

          {isOpen && (
            <div className="bg-white w-36">
              {["English", "French", "Kinyarwanda"].map((n) => (
                <button
                  key={n}
                  className="hover:bg-[#17a2b8] cursor-pointer flex justify-center items-center flex-col w-full text-left"
                  onClick={() => setName(n)}
                  onKeyDown={(e) => e.key === "Enter" && setName(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </li>
        <li className="flex flex-row justify-center items-center space-x-3 pl-4">
          <MdLightMode className="text-3xl text-center hover:text-[#17a2b8] cursor-pointer" />
          <div className="bg-[#FFB6C1] pr-3 pl-3 pt-0.5 pb-0.5 rounded-md hover:bg-[#17a2b8]">
            <Link to="/">Sign In</Link>
          </div>
          <div className="border-sold border-[#FFB6C1] border-4 pr-3 pl-3 pt-0.5 pb-0.5 rounded-md hover:bg-[#17a2b8]">
            <Link to="/">Create Account</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
