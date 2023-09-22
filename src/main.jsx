import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './Components/Main/Main.jsx'
import Home from './Components/Home/Home.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import Applied from './Components/Applied/Applied.jsx'
import Blog from './Components/Blog/Blog.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=>fetch('jobDetails.json')
        },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'applied',
          element:<Applied></Applied>
        },
        {
          path:'blogs',
          element:<Blog></Blog>
        },

      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
