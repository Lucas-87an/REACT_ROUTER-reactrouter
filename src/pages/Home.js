import { useFecth } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
  // carregamento de dados
  const url ='http://localhost:3000/products'
  const {data: items, loading, error}=useFecth(url)
  return (
    <div>
      {error && <p>{error}</p>}
      <h1 className="titleProduct">Produtos</h1>
      <ul className="product">
        {items && items.map(item=>(
          <li key={item.id}>
            <img className="homeproducts" src={item.src} />
            <h2>{item.name}</h2>
            <p className="textinho"> R$: {item.price}</p>
            {/* rota dinâmica */}
            <Link className="link" to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
