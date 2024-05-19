import Header from "@/components/Header";
import type { FunctionComponent } from "../common/types";

export const Home = (): FunctionComponent => {
	return (
		<div>
			<Header />
			<div className="bg-background font-bold w-screen h-screen flex flex-col justify-center items-center">
				<p className="text-6xl">Hello, world!</p>
			</div>
		</div>
	);
};
