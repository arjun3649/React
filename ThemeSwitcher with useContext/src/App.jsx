import { ThemeProvider } from "./Context/Theme";
import "./App.css";
import { useState, useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
// to make themeswitch work remember to change tailwind.config configurations
// add darkmode to it than it will work.
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    const query = document.querySelector("html");
    query.classList.remove("light", "dark");
    query.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full dark:bg-red-500  bg-yellow-300 ">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
