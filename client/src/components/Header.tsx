import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Separator } from "./ui/separator";
import SpeechifyLogo from "../assets/speechify-logo.svg";
import SpeechifyLogoLight from "../assets/speechify-logo-light.svg";
import { useTheme } from "@/components/ui/theme-provider";

const Header = () => {
	const { theme } = useTheme();

	return (
		<>
			<div className="z-10 w-full justify-between absolute bg-background">
				<div className="flex w-full justify-between py-2 px-3 items-center overflow-hidden">
					<div className="flex">
						<span className="font-bold text-lg cursor-pointer">
							{theme === "dark" ? (
								<img width={110} src={SpeechifyLogoLight} />
							) : (
								<img width={110} src={SpeechifyLogo} />
							)}

							{/* <div className="flex items-center">
              <img className="h-10 w-10" src={SpeechifyLogo}></img>
              <span className="ml-2 ">Translator (beta)</span>
            </div> */}
						</span>
					</div>

					<div className="">
						<ColorModeSwitcher />
					</div>
				</div>
				<Separator />
			</div>
		</>
	);
};

export default Header;
