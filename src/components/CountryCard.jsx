const CountryCard = () => {
	return (
		<div className='border cursor-pointer rounded-lg shadow-sm shadow-gray-950 overflow-hidden'>
			<div className='h-40 border bg-blue-900'>
				<img src='' alt='' />
        logo
			</div>
			<div className='p-5 pb-10 bg-blue-900'>
				<p className='text-white font-bold text-lg mb-5'>Germany</p>

				<div className='details flex flex-col gap-1'>
					<p className=''>
						Poplation: <span className=''>12324234331</span>
					</p>
					<p className=''>
						Region: <span className=''>Americas</span>
					</p>
					<p className=''>
						Capital: <span className=''>Washington DC</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CountryCard;
