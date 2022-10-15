import { Link, useParams } from "react-router-dom"
import { useFecth } from "../hooks/useFetch";

const Product = () => {
    // 4 - rota dinamica
    const {id} = useParams();

    // 5 - carregamento dado individual
    const url ='http://localhost:3000/products/' + id

    const {data: produto, loading, error}=useFecth(url)
  return (
    <>
    <p> ID do produto : {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {produto && (
        <div>
            <h1>{produto.name}</h1>
            <p>R$ :{produto.price}</p>
            {/* 6 - nested routes */}
            <Link to={`/products/${produto.id}/info`}>Mais informações</Link>
        </div>
    )}
  </>
  )
}


export default Product