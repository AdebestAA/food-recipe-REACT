import React, { useContext } from 'react'

import EachRecipe from '../../components/EachRecipe'
import { AppContext } from '../../ContextApi'

const Favorites = () => {
    const {myFavorites} = useContext(AppContext)
  return (
    <div>
        <main className='flex flex-wrap items-center justify-center gap-4 my-4'>
          {myFavorites.length < 1 && (
            <p className='font-semibold'>you currently don't have any favorite recipe </p>
          )}
    {myFavorites.map((item,index)=>  <EachRecipe key={index} item={item}/>)}
    </main>
    </div>
  )
}

export default Favorites
