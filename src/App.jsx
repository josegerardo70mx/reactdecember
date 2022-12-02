
import { HashRouter, Routes, Route } from 'react-router-dom';
import img1 from './images/logo.png'
import Footer from './components/Footer';
import Home from './pages/Home';
import Purchases from './pages/Purchases';
import  ProductsDetail from './pages/ProductsDetail';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';


function App() {

  const isLoading = useSelector(state => state.isLoading)
 

  return (

    <HashRouter>
      <NavBar />
      <img src={img1} ></img>   <h1 className='text-center' >Academlo ecommerce</h1>
      <p>Dont miss our black friday special offers</p>
      {isLoading && <LoadingScreen />}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* COMPRAS PURCHASES*/}
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
  </HashRouter>

    // <div className="App">
    //  <h1>App</h1>
     
    // </div>
  )
}

export default App
