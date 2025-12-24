import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import  { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
     <Provider store={store}>
      <RouterProvider router={router}/>

    </Provider>,
  </StrictMode>,
)
