import { Link, useSearchParams } from "react-router-dom"
import { useFecth } from "../hooks/useFetch"

const Search = () => {
  const [searchParams]=useSearchParams()
  const url ='http://localhost:3000/products?'+ searchParams
  const {data: items}=useFecth(url)
  return (
    <div>
      <ul className="product" >
        {items && items.map(item=>(
          <li key={item.id}>
            <img className="homeproducts" src={item.src} />
            <h1>{item.name}</h1>
            <p className="textinho">R$:{item.price}</p>
            <Link className="link" to={`/products/${item.id}/maisinformacoes`}>Detalhes do Produto</Link>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search