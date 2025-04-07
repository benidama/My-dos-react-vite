import { FaSun, FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

function ThemeToggle({ isDark }) {
  return (
    <>
      <button>{isDark ? <FaMoon /> : <FaSun />}</button>
      <MdLightMode />
    </>
  );
}

export default ThemeToggle;
