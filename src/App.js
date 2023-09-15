
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {

  // const refs = {
  //   productsRef:useRef(null),
  //   aboutRef:useRef(null),
  //   contactRef:useRef(null),
  //   homeRef:useRef(null),
  // }

  return (
    <>
        <Header />
        <Home />
        <Products />
        <About />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
