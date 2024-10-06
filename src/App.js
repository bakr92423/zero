import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import Page from './Pages/Page';
import User from './Pages/User';
import Vender from './Pages/Vender';
import Trock from './Pages/Trock';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import 'swiper/css';



const App = () => {
  const Root=createBrowserRouter([{path:'/', element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:'/Pages', element:<Page/>},
    {path:'/User', element:<User/>},
    {path:'/Vender', element:<Vender/>},
    {path:'/Pages', element:<Page/>},
    {path:'/Trock', element:<Trock/>},
    {path:'/Contact', element:<Contact/>},
    {path:'/Cart', element:<Cart/>}
  ]}])
  return (
    <div>
      <RouterProvider router={Root}></RouterProvider>
      
  
    </div>
  )
}

export default App
