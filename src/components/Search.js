import React, { useContext } from 'react'
import { AppContext } from '../ContextApi'


const Search = () => {
  const {search,setSearch,handleSearch} = useContext(AppContext)
  return (
 <form onSubmit={handleSearch} className='flex py-2' >
    <input type="text"
    placeholder='search recipe'
    name='search'
    className='shadow rounded-xl px-2 py-1 text-black md:w-64 w-[50%] mx-auto md:h-[2.5rem] h-[1.7rem]'
    value={search}
    onChange={(e)=> setSearch(e.target.value)} />
 </form>
  )
}

export default Search
