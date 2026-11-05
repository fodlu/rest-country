import { useMemo, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";

const Countries = ({ data }) => {
	const [filter, setFilter] = useState("all");
	const [search, setSearch] = useState("");

	const filtererd =
		filter === "all" ? data : data.filter((d) => d.region === filter);

		const searchFiltered = useMemo(
		() =>
			filtererd.filter((sf) =>
				sf.name.toLowerCase().includes(search.toLowerCase()),
			),
		[search, filter],
	);

	return (
		<div className='p-5 md:px-15 md:py-10'>
			<Filter
				data={data}
				setFilter={setFilter}
				search={search}
				setSearch={setSearch}
			/>

			{/* <div className='countries grid grid-cols-4 gap-10 pt-10'> */}
			<div className='countries gap-10 pt-10'>
				{searchFiltered.map((country, i) => (
					<CountryCard country={country} key={i} />
				))}
			</div>
		</div>
	);
};

export default Countries;
