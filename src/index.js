import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ModalContextProvider } from './context/ModalContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ModalContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ModalContextProvider>
        </QueryClientProvider>
    </Provider>

);