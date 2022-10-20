import { useFecth } from "../hooks/useFetch"
import { Link, useParams } from "react-router-dom"
import './Product.css'

const Product = () => {
  // rota dinâmica
  const {id}=useParams();
  // carregamento de dados individuais
  const url ='http://localhost:3000/products/' + id
  const {data:produto,loading, error}=useFecth(url)
  return (
    <>
    <p className="textinho">ID do Produto : {id}</p>
    {error && <p>Aconteceu um erro inesperado</p>}
    {loading && <p>Carregando...</p>}
    {produto && (
      <div>
        <h1>{produto.name}</h1>
        <img className="produtinho" src={produto.src} />
        <p className="textinho">R$ :  {produto.price}</p>
        {/*Nested Routes */}
        {/*<Link to={`/products/${produto.id}/info`}>Mais informações</Link>*/}
      </div>
    )}
    </>
  )
}

export default Product
