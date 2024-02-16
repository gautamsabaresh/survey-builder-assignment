import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './store';
import routes from './routes'
import Layout from './components/layout'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ]);

  return (<Provider store={store}><RouterProvider router={router} /></Provider>);
}

export default App
