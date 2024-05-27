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
    <main className='my-4 font-semibold flex justify-center flex-col items-center md:flex-row md:px-4 md:items-start md:justify-center'>
      <div className='min-h-[300px]  w-[70%]  flex justify-center py-4 md:py-0  '>
        <img src={foundData?.image_url} alt="" className='w-full h-60 md:min-h-[300px] rounded-lg'  />
      </div>
      <div className='w-[70%] mt-4 md:mt-0 text-center '>
    <h1>{foundData?.title}</h1>
    <h1>{foundData?.publisher}</h1>
    <h1>{foundData?.cooking_time}</h1>
     <button className='bg-slate-900 text-white py-2 px-4 mt-2 rounded-lg font-semibold' onClick={()=> addToFavorite(foundData)}>{
myFavorites.findIndex(item => item.id === foundData.id) === -1 ? "add to favorite" : "remove from favorite"
}</button>
 <div>{foundData?.ingredients?.map(item => {
      return (
       <section key={item.description}>
        <p>{item.quantity}</p>
        <p>{item.description}</p>
       </section>
      )
    })}</div>
      </div>

    </main>
  )
}

export default Details
