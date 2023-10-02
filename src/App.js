
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, NotFound, Login, Register, Reset } from './pages'
import { Header, Footer } from './components'

function App() {

  return (
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
  );
}

export default App;
