import { Search } from "lucide-react";

const Filter = ({ data, setFilter, search, setSearch, light }) => {
	const regions = [];

	data.forEach(
		(reg) => regions.indexOf(reg.region) === -1 && regions.push(reg.region),
	);

	return (
		<div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
			<label
				htmlFor='search-for-a-country'
				aria-describedby='search-for-a-country'>
				<div
					className={`relative rounded-sm h-15 shadow-md w-full md:w-85 ${light ? "bg-white" : "bg-blue-900"}`}>
					<Search
						className={`pointer-events-none absolute top-4 left-6 ${light ? "text-gray-400" : "text-gray-50"}`}
					/>
					<input
						id='search-for-a-country'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type='text'
						placeholder='Search for a country...'
						className={`bg-transparent w-full h-full pl-14 placeholder:text-gray-400 font-bold ${light ? "text-gray-400" : "text-white"}`}
					/>
				</div>
			</label>

			<select
				onChange={(e) => setFilter(e.target.value)}
				className={` p-4 font-semibold rounded-md shadow-sm w-fit ${light ? "bg-white text-gray-950" : "bg-blue-900 text-white"}`}
				name='regions'
				id='regions'>
				<option value='all'>Filter by Region</option>
				{regions.map((reg) => (
					<option value={reg} key={reg}>
						{reg}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
