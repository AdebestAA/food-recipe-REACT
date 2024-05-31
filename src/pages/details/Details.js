import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import { AppContext } from '../../ContextApi'

const Details = () => {
const {id } = useParams()
const [findLaoding,setFindLoading] = useState(false)
 const {  foundData,setFoundData,myFavorites,
    setMyFavaourites,addToFavorite} = useContext(AppContext)

  const findData = async()=> {
try {
  setFindLoading(true)
  const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)

  // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
  if (!res.ok) {
    console.log("there was an error")
  }
const response = await res.json()

// console.log(response.recipe);
if (response.recipe) {
  setFindLoading(false)
  setFoundData(response.recipe)
}
  
} catch (error) {
  console.log(error.message);
}
  }
 

  useEffect(()=>{
findData()
},[])

if (findLaoding) {
      // return <main className='flex flex-wrap items-center justify-center gap-4 my-4' ><h1 className='font-bold'>Loading</h1></main>
      return <Loader/>
}

  return (
    <main className='my-4 font-semibold flex justify-center flex-col gap-4 items-center md:flex-row md:px-4 md:items-start md:justify-center md:space-x-8 pt-4 px-2' >
      <div className='md:w-[50%]  flex md:flex-col justify-center py-4 md:py-0  '>
        <img src={foundData?.image_url} alt="" className='w-full h-60 lg:h-[300px] xxl:h-[400px] rounded-lg object-cover'  />
        {/* button for desktop */}
  <button className='bg-slate-900 text-white self-center mt-8 py-2 px-4 mt-2 rounded-lg font-semibold md:block hidden' onClick={()=> addToFavorite(foundData)}>{
  myFavorites.findIndex(item => item.recipe_id === foundData.recipe_id) === -1 ? "add to favorite" : "remove from favorite"
  }</button>
      </div>
      {/* button for mobile */}
           <button className='bg-slate-900 text-white py-2 px-4 mt-2 rounded-lg font-semibold md:hidden' onClick={()=> addToFavorite(foundData)}>{
myFavorites.findIndex(item => item.recipe_id
 === foundData.recipe_id) === -1 ? "add to favorite" : "remove from favorite"
}</button>
      <div className='md:w-[50%]  mt-4 md:mt-0 text-center flex flex-col'>
    {/* <h1>{foundData?.title}</h1> */}
    {/* title */}
    <article>

    <section  className='style-section'>
      <h1>Title:</h1>
      <span>{foundData?.title}</span>
    </section>
    {/* <h1>{foundData?.publisher}</h1> */}
    {/* publisher */}
     <section  className='style-section'>
      <h1>Publisher:</h1>
      <span>{foundData?.publisher}</span>
    </section>

    {/* <h1>{foundData?.cooking_time}</h1> */}
       {/* <section  className='style-section'>
      <h1>Cooking time:</h1>
      <span>{foundData?.cooking_time}</span>
    </section> */}


    </article>

{/* <table className='mt-4'>
  <thead className='border-[1px] border-gray-800 '>
  <th className='text-center w-[60%]'>Ingredient</th>
  <th className='text-center w-[40%] border-l-[0.5px] border-black'>Quantity</th>
  </thead>
 {foundData?.ingredients?.map((item,index) => {
   return (
    <tbody key={index} className='border-[1px] border-gray-800 text-start'>
    <td className='pl-[2px]'>{item.description}</td>
    <td className='border-l-[1px] border-black pl-2'>{item.quantity}</td>
    </tbody>

      )
    })}
    </table> */}
    <article className='mt-8'>
      <h1 className='capitalize underline italic'>ingredients</h1>
      <ul className='text-start list-disc md:mx-4 mx-[20px]'>
      {foundData?.ingredients?.length > 0 && foundData.ingredients.map((item,index)=>{
        
        return <li key={index} className='font-thin'>{item}</li>
      })}
      </ul>
    </article>
      </div>

    </main>
  )
}

export default Details
