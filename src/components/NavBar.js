import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <div>
        <Link className='home' to='/'>Home</Link>
        <Link className='home' to='/about'>Sobre</Link>
      </div>
    </nav>
  )
}

export default NavBar