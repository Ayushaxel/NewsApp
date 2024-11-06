import React from 'react'
import { useContext } from 'react'
import ItemContext from '../Context/ItemContext'

function Header() {
    const {getData,setSearch,search}=useContext(ItemContext)
    const handleOnchange=(e)=>{
        setSearch(e.target.value)
    }
    return (
    <nav className='bg-[#6bb77b] flex justify-between px-5 py-5 items-center'>
        <div>
            <h1 className='text-3xl text-white  font-bold'>Today News </h1>
        </div>
        <ul className='flex gap-x-6 text-2xl text-white'>
            <li>Home</li>
            <li>About</li>
        </ul>
        <div className='flex gap-x-3'>
            <input type="text" className='py-3 outline-none px-5 rounded-lg w-[20rem]' onChange={handleOnchange} value={search} />
            <button className='bg-white px-4 rounded-lg hover:bg-blue-300' onClick={()=>getData()}>Search</button>
        </div>
    </nav>
  )
}

export default Header