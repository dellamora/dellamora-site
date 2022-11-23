import { time } from "console";
import React, { createContext, useState, useEffect } from "react";

interface DarkModeContextInterface {
  isDark: boolean;
  toggleDarkMode: () => void;
}

let timeOut: NodeJS.Timeout;

export const DarkModeContext = createContext<DarkModeContextInterface>({
  isDark: false,
  toggleDarkMode: () => {
    console.log("dark");
  },
});

export const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isDark, setIsDark] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const toggleDarkMode = () => {
    clearTimeout(timeOut);
    if (!isBusy) {
      setIsBusy(true);
      setIsDark(last => {
        window.localStorage.setItem("theme", !last ? "dark" : "light");
        return !last;
      });
    }
    timeOut = setTimeout(() => {
      setIsBusy(false);
    }, 300);
  };
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const theme = window.localStorage.getItem("theme");
    setIsDark(theme === "dark");
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      <div className={isDark && "dark"}>{children}</div>
    </DarkModeContext.Provider>
  );
};
