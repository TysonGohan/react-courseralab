import { useTheme } from "./ThemeProvider";

const ThemeParagraph = ({ children }) => {
    const { theme } = useTheme();
    return (
      <p
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </p>
    );
  };

export { ThemeParagraph }