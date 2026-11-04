import React from 'react'

const Filter = () => {
  return (
    <div className=''>
        <label htmlFor="search">
            <input type="text" placeholder='Search for a country...' className="" />
        </label>

        <select name="regions" id="regions">
            <option value="all">Filter by Region</option>
        </select>
    </div>
  )
}

export default Filter