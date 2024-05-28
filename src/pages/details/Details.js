import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../components/context/ContextApi'
import Loader from '../../components/Loader'

const Details = () => {
const {id } = useParams()
const [findLaoding,setFindLoading] = useState(false)
 const {  foundData,setFoundData,myFavorites,
    setMyFavaourites,addToFavorite} = useContext(AppContext)

  const findData = async()=> {
try {
  setFindLoading(true)
  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
  if (!res.ok) {
    console.log("there was an error")
  }
const response = await res.json()

console.log(response.data.recipe.ingredients);
if (response.data.recipe) {
  setFindLoading(false)
  setFoundData(response.data.recipe)
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
    <main className='my-4 font-semibold flex justify-center flex-col items-center md:flex-row md:px-4 md:items-start md:justify-center md:space-x-8'>
      <div className='min-h-[300px]  w-[85%]  flex md:flex-col justify-center py-4 md:py-0  '>
        <img src={foundData?.image_url} alt="" className='w-full h-60 md:min-h-[300px] rounded-lg'  />
  <button className='bg-slate-900 text-white self-center mt-8 py-2 px-4 mt-2 rounded-lg font-semibold md:block hidden' onClick={()=> addToFavorite(foundData)}>{
  myFavorites.findIndex(item => item.id === foundData.id) === -1 ? "add to favorite" : "remove from favorite"
  }</button>
      </div>
           <button className='bg-slate-900 text-white py-2 px-4 mt-2 rounded-lg font-semibold md:hidden' onClick={()=> addToFavorite(foundData)}>{
myFavorites.findIndex(item => item.id === foundData.id) === -1 ? "add to favorite" : "remove from favorite"
}</button>
      <div className='w-[85%] mt-4 md:mt-0 text-center flex flex-col'>
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
       <section  className='style-section'>
      <h1>Cooking time:</h1>
      <span>{foundData?.cooking_time}</span>
    </section>

    </article>

<table className='mt-4'>
  <tr className='border-[1px] border-gray-800 '>
  <th className='text-center w-[60%]'>Ingredient</th>
  <th className='text-center w-[40%] border-l-[0.5px] border-black'>Quantity</th>
  </tr>
 {foundData?.ingredients?.map((item,index) => {
   return (
    <tr key={index} className='border-[1px] border-gray-800 text-start'>
    <td className='pl-[2px]'>{item.description}</td>
    <td className='border-l-[1px] border-black pl-2'>{item.quantity}</td>
    </tr>
    //  <section key={item.description}>
    //     {/* quantity */}
    //     <section  className='style-section'>
    //     <h1>Quantity:</h1>
    //     <span>{item.quantity}</span>
    //     </section>

    //     {/* <p>{item.description}</p> */}
    //     {/* description */}
    //        <section  className='style-section'>
    //     <h1>Description:</h1>
    //     <span>{item.description}</span>
    //     </section>
    //    </section>
      )
    })}
    </table>
      </div>

    </main>
  )
}

export default Details
