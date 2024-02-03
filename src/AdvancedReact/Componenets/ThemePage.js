import { ThemeTitle } from "./ThemeTitle";
import { ThemeParagraph } from "./ThemeParagraph";
import { useTheme } from "./ThemeProvider";

const ThemePage = () => {

    const { theme } = useTheme();

    return (
      <div className="Page" style={{ backgroundColor: theme === "light" ? "white" : "black"}}>
        <ThemeTitle>When it comes to dough</ThemeTitle>
        <ThemeParagraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </ThemeParagraph>
      </div>
    );
  };

export { ThemePage };
