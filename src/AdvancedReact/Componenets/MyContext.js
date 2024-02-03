import { useTheme } from "./ThemeProvider";
import { ThemePage } from "./ThemePage";
const MyContext = () =>
{
    const { theme, changeTheme } = useTheme();
    return <>
        <h2> React Context - Theme Changer </h2>
        Switch Theme<input type="checkbox" checked={theme === "light"} onChange={changeTheme}/>
        <ThemePage/>
    </>
}

export { MyContext };