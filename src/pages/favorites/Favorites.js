import React, { useContext } from 'react'
import { AppContext } from '../../components/context/ContextApi'
import EachRecipe from '../../components/EachRecipe'

const Favorites = () => {
    const {myFavorites} = useContext(AppContext)
  return (
    <div>
        <main className='flex flex-wrap items-center justify-center gap-4 my-4'>
    {myFavorites.map((item,index)=>  <EachRecipe key={index} item={item}/>)}
    </main>
    </div>
  )
}

export default Favorites
