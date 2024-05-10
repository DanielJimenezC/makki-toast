import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Documentation from './Documentation.jsx'
import ErrorPage from './ErrorPage.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: '/docs',
    element: <Documentation />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
