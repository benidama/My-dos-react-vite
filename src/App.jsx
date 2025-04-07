import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "./components/Icons";
import Challenges from "./components/Challenges";
import { MdLanguage } from "react-icons/md";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center justify-center flex items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-800 text-4xl">Vite + React</h1>
      <div className="card flex flex-col justify-center items-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-2xl text-red-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-sm text-left">
        Click on the Vite and React logos to learn more
      </p>
      <Icons />
      <img src="https://flagcdn.com/us.svg" alt="English" className="w-6 h-4" />
      <Challenges />
      <MdLanguage size={24} color="black" />
      <ToggleTheme />
    </>
  );
}

export default App;
