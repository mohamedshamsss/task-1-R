import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Parent from './Parent/Parent'
import Notfound from './Notfound/Notfound'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'
import Movies from './Moves'


export default function App() {
 let routers =  createBrowserRouter([

    {path:"",element:<Layout />,children:[
      {index:true,element:<Home />},
      {path:"about",element:<About />},
      {path:"gallery",element:<Gallery />,children:[
        {index:true,element:<Web />},
        {path:"mobile",element:<Mobile />},
      ]},
      {path:"parent",element:<Parent />},
      {path:"*",element:<Notfound />},
      {path:"Movies",element:<Movies />},
    ]},
  ])
  return <>
    <RouterProvider router={routers}/>
  </>
}
