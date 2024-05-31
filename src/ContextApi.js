import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const AppContext = createContext()

const AppProvider =  ({children})=>{
    const [search,setSearch] = useState("")
    const [loading,setLoading] = useState(false)
    const [data,setData]= useState([])
    const [foundData,setFoundData] = useState([])
    const [myFavorites,setMyFavaourites] = useState([])

    const push = useNavigate()

    const addToFavorite = (currentItem) => {
      const copyFavorite = [...myFavorites]

      const checkFavorites = copyFavorite.findIndex(item => item.id === currentItem.id)

      if (checkFavorites === -1) {
        
        copyFavorite.push(currentItem)
      }
      else{
        copyFavorite.splice(checkFavorites,1)
      }

      setMyFavaourites(copyFavorite)
    }

    const handleSearch =async (e)=> {
        e.preventDefault()
        if (!search) {
            return
        }

        try {
            setLoading(true)
            const res = await fetch(`https:/forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
           
            if (!res.ok) {
                console.log("something went wrong");
                return;
            }
            const response  = await res.json()
            console.log();
            if (response.data.recipes.length > 0) {
              setLoading(false)
              setData(response.data.recipes)       
            }
            if (response.data.recipes.length === 0) {
                setLoading(false)
                 setData(response.data.recipes)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // setSearch("")
        push("/")

    }

const onLoadSearch = async(recipe)=>{
 try {
            setLoading(true)
           
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
            // const res = await fetch(`https:/forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`)
          
            if (!res.ok) {
                console.log("something went wrong");
                return;
            }
            const response  = await res.json()
            // console.log(response.recipes);
            
               if (response.recipes.length > 0) {
                setLoading(false)
                setData(response.recipes)
        
                
            }
           
            // if (response.data.recipes.length > 0) {
            //     setLoading(false)
            //     setData(response.data.recipes)
            // }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }

}

// useEffect(()=>{
//   if (!search) {
//     onLoadSearch("pizza")
//     return ()=>  onLoadSearch("pizza")
//   }
//   handleSearch()
  
//   return ()=> handleSearch()

// },[search])

useEffect(()=>{
const url = 'https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acaa964e06msheb33891d8fb14efp128fd2jsn280fae11bda3',
		'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
	}
};

async function fetch() {
  try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

// fetch()

// return ()=> fetch()
},[])

useEffect(()=>{
onLoadSearch("pizza")

return ()=> onLoadSearch("pizza")
},[])


  return (  <AppContext.Provider value={{
    search,
    setSearch,
    handleSearch,
    loading,
    data,
    setData,
    foundData,
    setFoundData,
    addToFavorite,
    myFavorites,
    setMyFavaourites
    

  }} >
        {children}
    </AppContext.Provider>
  )
}


export default AppProvider