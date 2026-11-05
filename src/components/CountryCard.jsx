import { Link } from "react-router-dom";

const CountryCard = ({ country, light }) => {
	return (
		<Link
			to={`/${country.name}`}
			className='bg-blue-900 cursor-pointer rounded-lg shadow-sm overflow-hidden'>
			<div className={`bg-linear-240 from-gray-50 to-gray-900 w-full h-50 overflow-hidden ${light ? "bg-white" : "bg-blue-900"}`}>
				<img src={country.flag || country.flags.svg || country.flags.png} alt='flag' className={`aspect-square w-full h-full object-cover`} />
			</div>
			<div className={`p-5 pb-10 ${light ? "bg-white" : "bg-blue-900"}`}>
				<p className={` font-bold text-lg mb-5 ${light ? "text-gray-950" : "text-white"}`}>{country.name}</p>

				<div className='details flex flex-col gap-1 light'>
					<p className=''>
						Poplation:{" "}
						<span className=''>
							{Number(country.population).toLocaleString()}
						</span>
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
