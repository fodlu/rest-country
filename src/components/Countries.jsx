import CountryCard from "./CountryCard";
import Filter from "./Filter";

const Countries = () => {
	return (
		<div className='px-15 py-10'>
			<Filter />

			<div className='grid grid-cols-4 gap-10 pt-10'>
				{Array.from({ length: 20 }).map((_, i) => (
					<CountryCard key={i} />
				))}
			</div>
		</div>
	);
};

export default Countries;
