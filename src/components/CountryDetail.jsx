import { ArrowLeft } from "lucide-react";

const CountryDetail = () => {
	return (
		<div className="p-10">
			<button type='button' className="bg-blue-900 flex items-center gap-1 px-5 py-1 text-white font-bold shadow-sm rounded-sm cursor-pointer">
				{" "}
				<ArrowLeft size={17} /> Back
			</button>

			<div className='flex mt-10 gap-15 text-[16px]'>
				<div className='w-300 border'>
					<img src='' alt='' />
				</div>

				<div className=' w-full'>
					<p className='mb-5 font-bold text-2xl text-white'>Belgium</p>

					<div className='details flex justify-between mb-12'>
						<div className='flex flex-col gap-1'>
							<p className=''>
								Native Name: <span className=''>Biege</span>
							</p>
							<p className=''>
								Population: <span className=''>Biege</span>
							</p>
							<p className=''>
								Region: <span className=''>Biege</span>
							</p>
							<p className=''>
								Sub Region: <span className=''>Biege</span>
							</p>
							<p className=''>
								Capital: <span className=''>Biege</span>
							</p>
						</div>
						<div className='flex flex-col gap-1'>
							<p className=''>
								Top Level Domain: <span className=''>Biege</span>
							</p>
							<p className=''>
								Currencies: <span className=''>Biege</span>
							</p>
							<p className=''>
								Languages: <span className=''>Biege</span>
							</p>
						</div>
					</div>

					<div className=' flex gap-4'>
						<p className='text-white font-bold'>Border Countries: </p>
						{Array.from({ length: 3 }).map((_, i) => (
							<button className='px-5 py-1 bg-blue-900 text-white font-semibold shadow-lg rounded-sm cursor-pointer' key={i}>
								France
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
