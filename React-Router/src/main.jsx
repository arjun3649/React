import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home/Home.jsx"
import  About  from "./components/About/About.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
