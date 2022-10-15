import {Form, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './SearchForm.css'
const SearchForm = () => {
  const navigate= useNavigate()
  const [query, setQuery]= useState()

  const HandleSubmit=(e)=>{
    e.preventDefault()

    navigate('/search?q='+query)
  }
  return (
      <form onSubmit={HandleSubmit}>
        <input className='search' type="text" onChange={(e)=>setQuery(e.target.value)}/>
        <input className='Searching' type="submit" value="Buscar" />
      </form>
    
  )
}

export default SearchForm

