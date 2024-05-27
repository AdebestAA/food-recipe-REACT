import React, { useContext } from 'react'
import { AppContext } from '../../components/context/ContextApi'
import EachRecipe from '../../components/EachRecipe'
import Loader from '../../components/Loader'

const Home = () => {

  const {search,setSearch,handleSearch,loading,data} = useContext(AppContext)
// console.log(data);
  if (loading) {
    // return <main className='flex flex-wrap items-center justify-center gap-4 my-4' ><h1 className='font-bold'>Loading</h1></main>
    return <Loader/>
  }
  return (
    <main className='flex flex-wrap justify-center gap-4 my-4'>
{data.length === 0 && (
  <p className='font-semibold text-textColor'>
no recipe was found
  </p>
)}
    {data.length > 0 && data.map((item,index)=>  <EachRecipe key={index} item={item}/>)}
    </main>
  )
}

export default Home
