import React from "react";

function Dark() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold">Dark Mode Example</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-yellow-400"
          onClick={toggleTheme}
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
}

export default Dark;
