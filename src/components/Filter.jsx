import { Search } from "lucide-react";

const Filter = () => {
  return (
    <div className='flex items-center justify-between'>
        <label htmlFor="search-for-a-country" aria-describedby="search-for-a-country" >
          <div className="relative w-120 bg-blue-900 rounded-sm p-4 shadow-sm shadow-gray-950">
            <Search className="pointer-events-none absolute top-4 left-6 text-gray-50" />
            <input id="search-for-a-country" type="text" placeholder='Search for a country...' className="bg-transparent w-full h-full pl-11 placeholder:text-gray-400 text-white font-bold" />
          </div>
        </label>

        <select className="bg-blue-900 p-4 text-white font-semibold rounded-md shadow-sm shadow-gray-950" name="regions" id="regions">
            <option value="all">Filter by Region</option>
        </select>
    </div>
  )
}

export default Filter