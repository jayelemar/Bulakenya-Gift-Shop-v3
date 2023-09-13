import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Reviews from './pages/reviews/Reviews';

function App() {
  return (
    <>
     <Header /> 
     <Home />
     {/* <Reviews /> */}
     <Footer />
    </>
  );
}

export default App;
