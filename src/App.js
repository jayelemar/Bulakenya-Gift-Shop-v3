
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, NotFound, Login, Register, Reset, Admin } from './pages'
import { Header, Footer } from './components'
import { ToastContainer } from 'react-toastify';
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';

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

                <Route path="/admin/*" element={
                    <AdminOnlyRoute>
                        <Admin /> 
                    </AdminOnlyRoute>
                    }
                />
                
            </Routes>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
