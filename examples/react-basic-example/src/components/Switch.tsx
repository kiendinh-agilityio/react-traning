import React, { createContext, memo, useContext, useState } from "react";

type ThemeContextType = string | null;

const ThemeContext = createContext<ThemeContextType>(null);

interface GreetingProps {
  name: string;
}

export const Switch = () => {
  const [theme, setTheme] = useState<string>("dark");

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button className="btn btn-primary" onClick={handleClick}>
        Switch theme
      </button>
      <Greeting name="Kien Dinh" />
    </ThemeContext.Provider>
  );
};

// Component Greeting memoized với arrow function và TypeScript
const Greeting = memo(({ name }: GreetingProps) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  const theme = useContext(ThemeContext);

  return <h3 className={theme || ""}>Hello, {name}!</h3>;
});
