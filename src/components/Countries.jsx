import CountryCard from "./CountryCard";
import Filter from "./Filter";

const Countries = () => {
	return (
		<div>
			<Filter />

			{Array.from({ length: 20 }).map((_, i) => (
				<CountryCard key={i} />
			))}
		</div>
	);
};

export default Countries;
