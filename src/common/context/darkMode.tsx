import React, { createContext, useState } from "react";

interface DarkModeContextInterface {
  isDark: boolean;
  toggleDarkMode: () => void;
}

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
  const toggleDarkMode = () => setIsDark(last => !last);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      <div className={isDark && "dark"}>{children}</div>
    </DarkModeContext.Provider>
  );
};
