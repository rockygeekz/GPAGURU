import React from 'react'
import  Header  from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import {BrowserRouter, createBrowserRouter,RouterProvider} from "react-router-dom";
import  Scheme22 from "./components/scheme22.jsx";
import Csgpa from "./components/CgpaSgpa.jsx";
import Cgpa from './components/Cgpa.jsx';
import Sgpa from './components/Spga.jsx';

// import {  } from "react-router-dom";

const App = () => {
  return (
    <div>
      < Header/>
    <RouterProvider router={approuter}/>
    </div>
  )
}

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/cschoice",
    element:<Csgpa/>,
  },
  {
    path:"/scheme22",
    element:<Scheme22/>,
  },
  {
    path:"/c_scheme22",
    element:<Cgpa/>,
  },
  {
    path:"/s_scheme22",
    element:<Sgpa/>,
  }
])

export default App
