import { useTheme } from "./ui/theme-provider";
import { Button } from "./ui/button";
import { MoonIcon, Sun } from "lucide-react";

export const ColorModeSwitcher = () => {
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
	};
	return theme === "dark" ? (
		<Button
			className="border-none"
			variant="outline"
			size="icon"
			onClick={toggleTheme}
		>
			<Sun className="h-5 w-5" />
		</Button>
	) : (
		<Button
			className="border-none"
			variant="outline"
			size="icon"
			onClick={toggleTheme}
		>
			<MoonIcon className="h-5 w-5" />
		</Button>
	);
};
