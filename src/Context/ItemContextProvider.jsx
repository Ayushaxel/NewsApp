import React, { useEffect,useState } from 'react'
import ItemContext from './ItemContext';

const ItemContextProvider=({children})=>{
  const [data, setData] = useState([])
  const [search, setSearch] = useState('india')
  const [loading, setLoading] = useState(true)
    const ApiKey='94014553168a487386f1ea42e2f341f4'
    const getData= async ()=>{
      const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${ApiKey}`)
      const data= await response.json()
      console.log(data)
      setData(data.articles)
      setLoading(false)
    }
    // useEffect(()=>getData(),[])
    return(
        <ItemContext.Provider value={{ data,search,setSearch,loading }}>
        {children}    
        </ItemContext.Provider>
    )
}

export default ItemContextProvider