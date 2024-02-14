import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import routes from './routes'
import Layout from './components/layout'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
