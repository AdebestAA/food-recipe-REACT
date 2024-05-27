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

    const handleSearch =async ()=> {
        // e.preventDefault()
        // if (!search) {
        //     return
        // }

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
            const res = await fetch(`https:/forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`)
           
            if (!res.ok) {
                console.log("something went wrong");
                return;
            }
            const response  = await res.json()
          
           
            if (response.data.recipes.length > 0) {
                setLoading(false)
                setData(response.data.recipes)
                
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }

}

useEffect(()=>{
  if (!search) {
    onLoadSearch("beans")
    return
  }
 handleSearch()
},[search])

useEffect(()=>{
onLoadSearch("beans")
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