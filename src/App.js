
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
 // pages 
 import Home from './pages/Home';
 import About from './pages/About';
 import Product from './pages/Product';
 import Info from './pages/Info';
 import NotFound from './pages/NotFound';
import Search from './pages/Search';

 // components
 import NavBar from './components/NavBar';
 import SearchForm from './components/SearchForm';
import MaisInfo from './pages/MaisInfo';


function App() {
  return (
    <div className="App">
        <h1 className='Title'>ShopStorage</h1>
        <BrowserRouter>
        {/*links com React Router */}
        <NavBar/>
        {/* search */}
        <SearchForm/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              {/*rota dinâmica */}
              <Route path='/products/:id'element={<Product/>}/>
              {/*nested route */}
              <Route path='/products/:id/info' element={<Info/>}/>
              {/*search */}
              <Route path='/products/:id/maisinformacoes' element={<MaisInfo/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
