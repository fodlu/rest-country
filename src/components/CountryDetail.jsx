import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const CountryDetail = ({ data }) => {
	const codeToName = (code) => {
		const countryName = data.find((d) => d.alpha3Code === code);
		return countryName;
	};

	const { name } = useParams();

	const [country, setCountry] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setCountry(data.find((n) => n.name === name));
			setLoading(false);
		}, 1500);
	}, [name]);

	if (loading) {
		return (
			<div className=''>
				<Loader />
			</div>
		);
	}
	return (
		<div className='p-5 md:p-10'>
			<Link
				to='/'
				type='button'
				className='bg-blue-900 flex items-center gap-1 px-5 py-1 text-white font-bold shadow-sm rounded-sm cursor-pointer w-fit'>
				{" "}
				<ArrowLeft size={17} /> Back
			</Link>

			<div className='flex flex-col md:flex-row mt-10 gap-15 text-[16px]'>
				<div className='w-full h-100 md:w-300 border'>
					<img src={country.flags.svg} alt='' />
				</div>

				<div className='w-full'>
					<p className='mb-5 font-bold text-2xl text-white'>{country.name}</p>

					<div className='details flex flex-col gap-10 md:flex-row justify-between mb-12'>
						<div className='flex flex-col gap-1'>
							<p className=''>
								Native Name: <span className=''>{country.nativeName}</span>
							</p>
							<p className=''>
								Population: <span className=''>{Number(country.population).toLocaleString()}</span>
							</p>
							<p className=''>
								Region: <span className=''>{country.region}</span>
							</p>
							<p className=''>
								Sub Region: <span className=''>{country.subregion}</span>
							</p>
							<p className=''>
								Capital: <span className=''>{country.capital}</span>
							</p>
						</div>
						<div className='flex flex-col gap-1'>
							<p className=''>
								Top Level Domain:{" "}
								<span className=''>{country.topLevelDomain[0]}</span>
							</p>
							<p className=''>
								Currencies:{" "}
								{Array.isArray(country.currencies) ?
									country.currencies.map((c) => (
										<span className=''>{c.name} </span>
									))
								:	<span className=''>{country.currencies?.name}</span>}

							</p>
							<p className=''>
								Languages: {" "}
								{Array.isArray(country.languages) ?
									country.languages.map((c) => (
										<span className=''>{c.name} </span>
									))
								:	<span className=''>{country.languages.name}</span>}

							</p>
						</div>
					</div>

					<div className='flex flex-col md:fle gap-4'>
						<p className='text-white font-bold'>Border Countries: </p>
						<div className='flex gap-2 flex-wrap'>
							{country.borders && country.borders.map((b, i) => (
								<Link
									to={`/${codeToName(b).name}`}
									className='px-5 py-1 bg-blue-900 text-white font-semibold shadow-lg rounded-sm cursor-pointer'
									key={i}>
									{codeToName(b).name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
