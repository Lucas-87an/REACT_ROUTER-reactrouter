import { useParams } from "react-router-dom"

const MaisInfo = () => {
    const {id}=useParams()
  return (
    <div>
        <h2>Mais informações sobre o :{id}</h2>
    </div>
  )
}

export default MaisInfo