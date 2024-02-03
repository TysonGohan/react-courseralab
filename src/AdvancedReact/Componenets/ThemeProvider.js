import { useState, createContext, useContext } from "react";

const ThemeContext = createContext("");

const ThemeProvider = ({ children }) =>
{
    const [theme, toggleTheme] = useState("light");

    /*function modifyTheme()
    {
        toggleTheme(theme === "light" ? "dark" : "light");
        alert(theme);
    }*/

    return <>
        <ThemeContext.Provider value={{theme, changeTheme: () => toggleTheme(theme === "light" ? "dark" : "light")}}>
            {children}
        </ThemeContext.Provider>
    </>
}

export { ThemeProvider };

export const useTheme = () => useContext(ThemeContext);