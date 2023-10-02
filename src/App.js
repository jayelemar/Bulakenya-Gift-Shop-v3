
import './App.css';
<<<<<<< Updated upstream
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
=======
import { Home, NotFound, Login, Register, Reset } from './pages'
import { Header, Footer } from './components'

>>>>>>> Stashed changes

function App() {

  // const refs = {
  //   productsRef:useRef(null),
  //   aboutRef:useRef(null),
  //   contactRef:useRef(null),
  //   homeRef:useRef(null),
  // }

  return (
<<<<<<< Updated upstream
    <>
        <Header />
        <Home />
        <Products />
        <About />
        <Contact />
        <Footer />
    </>
=======
        <>
          <Header />
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="*" element={ <NotFound /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/reset" element={ <Reset /> } />
          </Routes>
          <Footer />
        </>
>>>>>>> Stashed changes
  );
}

export default App;
