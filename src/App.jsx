// App.jsx
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import './index.css';

const themes = {
  cyberpunk: "bg-black text-green-400 font-mono",
  neon: "bg-gray-900 text-pink-500 font-sans",
  matrix: "bg-black text-lime-400 font-mono",
};

function App() {
  const [theme, setTheme] = useState("cyberpunk");

  useEffect(() => {
    document.title = "Cyberpunk Portfolio";
  }, []);

  return (
    <div className={`${themes[theme]} min-h-screen transition-all duration-500`}>
      <div className="p-4 flex justify-end">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-black border border-green-500 px-2 py-1 text-sm text-green-400"
        >
          <option value="cyberpunk">Cyberpunk</option>
          <option value="neon">Neon</option>
          <option value="matrix">Matrix</option>
        </select>
      </div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;