import { useTheme } from "./ThemeProvider";

const ThemeTitle = ({ children }) => {
    const { theme } = useTheme();
    return (
      <h2
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </h2>
    );
  };

  export { ThemeTitle }