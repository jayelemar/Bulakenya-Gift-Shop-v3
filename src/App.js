import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/products/Products';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <>
     <Header /> 
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/products' element={ <Products/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='*' element={ <NotFound/> }/>
          <Route />
        </Routes>
     <Footer />
    </>
  );
}

export default App;
