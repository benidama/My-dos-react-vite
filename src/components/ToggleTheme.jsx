import { FaSun, FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

function ThemeToggle({ isDark }) {
  return (
    <>
      <h1>Just for checking the setups</h1>
      <button>{isDark ? <FaMoon /> : <FaSun />}</button>
      <MdLightMode />
    </>
  );
}

export default ThemeToggle;
