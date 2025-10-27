import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
//import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Context/useContext.jsx';

//import ContextProvider from './Hooks/TextProvider.jsx';
//import { ContextData } from './Hooks/Formcontext.jsx';



const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <ContextProvider>

  <RouterProvider router={router}/>
  <Toaster position='top-right' toastOptions={{duration: 2000}}/>

  </ContextProvider>
  </QueryClientProvider>
  </StrictMode>,
)
