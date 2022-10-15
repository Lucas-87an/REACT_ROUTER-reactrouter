import { Link } from "react-router-dom"
import { useFecth } from "../hooks/useFetch"
import './Home.css'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error}=useFecth(url)
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="product">
        {items && items.map(item =>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price} </p>
            {/*4 - rota dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home