import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ setLight, light }) => {
	return (
		<header className={`flex items-center justify-between py-3 text-sm px-3 md:px-10 md:font-[14px] shadow-md ${light ? "bg-gray-50" : "bg-blue-900"}`}>
			<Link to='/' className={` font-bold ${light ? "text-gray-950" : "text-white"}`}>
				Where in the world?
			</Link>

			<button
				type='button'
				aria-label='polite'
				role='themes'
				onClick={() => setLight((prev) => !prev)}
				className={`md:px-5 py-2 flex items-center gap-1 font-bold cursor-pointer ${light ? "text-gray-950" : "text-white"}`}>
				<Moon size={14} className={`${light ? "fill-transparent text-gray-950" : "fill-gray-50"}`} />
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
