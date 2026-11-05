import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='bg-blue-900 flex items-center justify-between py-3 text-sm px-3 md:px-10 md:font-[14px]'>
			<Link to='/' className='text-white font-bold'>
				Where in the world?
			</Link>

			<button
				type='button'
				aria-label='polite'
				role='themes'
				className='md:px-5 py-2 flex items-center gap-1 text-white font-bold'>
				<Moon size={14} className='text-white fill-gray-50' />
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
