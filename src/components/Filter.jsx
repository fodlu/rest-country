import { Search } from "lucide-react";

const Filter = ({data, setFilter, search, setSearch}) => {
  const regions = []

  data.forEach((reg) => regions.indexOf(reg.region) === -1 && regions.push(reg.region))

  return (
    <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <label htmlFor="search-for-a-country" aria-describedby="search-for-a-country" >
          <div className="relative bg-blue-900 rounded-sm h-15 shadow-sm shadow-gray-950 w-full md:w-85">
            <Search className="pointer-events-none absolute top-4 left-6 text-gray-50" />
            <input id="search-for-a-country" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search for a country...' className="bg-transparent w-full h-full pl-14 placeholder:text-gray-400 text-white font-bold" />
          </div>
        </label>

        <select onChange={(e) => setFilter(e.target.value)} className="bg-blue-900 p-4 text-white font-semibold rounded-md shadow-sm shadow-gray-950 w-fit" name="regions" id="regions">
            <option value="all">Filter by Region</option>
            {regions.map((reg) => (
              <option value={reg} key={reg}>{reg}</option>
            ))}
        </select>
    </div>
  )
}

export default Filter