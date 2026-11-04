import { Moon } from 'lucide-react'
const Header = () => {
	return (
		<header className='bg-blue-900 flex items-center justify-between py-5 px-10 font-[14px]'>
			<p className='text-white font-bold'>Where in the world?</p>

			<button type='button' aria-label='polite' role='themes' className='flex items-center gap-1 text-white font-bold'>
				<Moon size={14} className='text-white fill-gray-50' />
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
