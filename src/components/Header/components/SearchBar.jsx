import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div className='relative bg-primaryGradient p-[1.6px] xl:p-[1px] rounded-customSmall'>
            <input 
                type="search"
                placeholder='Search jobs here'
                className='bg-accentColor px-10 rounded-customSmall text-white'
            />
            <FiSearch 
                className='absolute left-3 text-xl top-[50%] -translate-y-[50%]'
            />
        </div>
    )
}

export default SearchBar