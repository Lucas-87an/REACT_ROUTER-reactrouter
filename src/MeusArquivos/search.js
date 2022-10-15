import { useSearchParams, Link } from "react-router-dom"
import { useFecth } from "../hooks/useFetch"

const Search = () => {
    const [searchParams]= useSearchParams()
    const url ='http://localhost:3000/products?'+ searchParams
    const {data:items, loading, error}=useFecth(url);
  return (
    <div>
        <ul className="product">
        {items && items.map(item =>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price} </p>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search