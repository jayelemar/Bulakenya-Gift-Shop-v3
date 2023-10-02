
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, NotFound, Login } from './pages'
import { Header, Footer } from './components'



function App() {

  return (
        <>
          <Header />
          <Routes>
              <Route path="/login" element={ <Login/> } />
              <Route path="*" element={ <NotFound/> } />
              <Route path="/" element={ <Home/> } />
          </Routes>
          <Footer />
        </>
  );
}

export default App;
