import React from "react";

import "./theme-toggle.styles.scss";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  );

  React.useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-toggle-component">
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
