import React from 'react'
import { useNavigate } from 'react-router-dom'
const EachRecipe = ({item}) => {

    const push = useNavigate()

    const navigate = ()=> {
        push(`/recipe-detail/${item.id}`)
    }
  return (
    <section className='xxl:w-[22%] xxl:h-[370px] xl:w-[22%] xl:h-[300px] lg:w-[30%] lg:h-[300px] md:w-[30%] md:h-[250px] sm:w-[45%] sm:h-[300px] xsm:w-[42%] xsm:h-[230px] w-[90%]  bg-cardColor flex flex-col items-center pt-4 rounded-lg justify-evenly pb-2'>
     <img src={item.image_url} alt={item.title} className='w-[80%] h-[60%] rounded-md object-cover' />
     <div className='w-[85%] text-center'>
      {/* small screen title */}
<h1 className='md:font-bold font-medium md:hidden block md:text-[1rem] text-[0.8rem]'>{item.title.length > 15 ? item.title.slice(0,10) + "..." : item.title}</h1>
      {/* large  screen title*/}
<h1 className='md:font-bold font-medium md:block hidden'>{item.title.length > 15 ? item.title.slice(0,15) + "..." : item.title}</h1>
{/* small screen publisher */}
<h5 className='md:font-semibold font-normal block md:hidden text-[0.8rem]'>{item.publisher.length > 10 ? item.publisher.slice(0,9)+"..." : item.publisher}</h5>
{/* large screen publisher */}
<h5 className='md:font-semibold font-normal md:block hidden'>{item.publisher.length > 15 ? item.publisher.slice(0,14)+"..." : item.publisher}</h5>
     </div>
<button className='bg-textColor text-white md:py-2 md:px-4 py-[3px] px-[8px] mt-2 rounded-lg md:font-semibold text-[0.8rem] hover:opacity-70 focus:opacity-70' onClick={navigate}>Detail</button>
    </section>
  )
}

export default EachRecipe
