import { Link } from "react-router-dom";

const CountryCard = ({country}) => {

	return (
		<Link to={`/${country.name}`} className='bg-blue-900 cursor-pointer rounded-lg shadow-sm shadow-gray-950 overflow-hidden max-w-200'>
			<div className='h-40 bg-blue-900'>
				<img src={country.flags.svg} alt='flag' />

			</div>
			<div className='p-5 pb-10 bg-blue-900'>
				<p className='text-white font-bold text-lg mb-5'>{country.name}</p>

				<div className='details flex flex-col gap-1'>
					<p className=''>
						Poplation: <span className=''>{Number(country.population).toLocaleString()}</span>
					</p>
					<p className=''>
						Region: <span className=''>{country.region}</span>
					</p>
					<p className=''>
						Capital: <span className=''>{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
