import React from 'react'
import  Header  from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import {BrowserRouter, createBrowserRouter,RouterProvider} from "react-router-dom";
import  Scheme22 from "./components/scheme22.jsx";
import Csgpa from "./components/CgpaSgpa.jsx";
import Cgpa from './components/cgpa.jsx';
import Sgpa from './components/Spga.jsx';
import Sem2 from './components/2ndsem.jsx';
import Sem3 from './components/3rdsem.jsx';
import Sem4 from './components/4thsem.jsx';
import Sem5 from './components/5thsem.jsx';
import Sem6 from './components/6thsem.jsx';
import Sem7 from './components/7thsem.jsx';
import Sem8 from './components/8thsem.jsx';

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
  },
  {
    path:"/2ndsem",
    element:<Sem2/>,
  },
  {
    path:"/3rdsem",
    element:<Sem3/>,
  },
  {
    path:"/4thsem",
    element:<Sem4/>,
  },
  {
    path:"/5thsem",
    element:<Sem5/>,
  },
  {
    path:"/6thsem",
    element:<Sem6/>,
  },
  {
    path:"/7thsem",
    element:<Sem7/>,
  },
  {
    path:"/8thsem",
    element:<Sem8/>,
  }

])

export default App
