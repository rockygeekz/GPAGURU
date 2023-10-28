import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Scheme22 from "./components/scheme22.jsx";
import Csgpa from "./components/CgpaSgpa.jsx";
import Cgpa from "./components/cgpa.jsx";
import Sgpa from "./components/Spga.jsx";
import Sem2 from "./components/2ndsem.jsx";
import Sem3 from "./components/3rdsem.jsx";
import Sem4 from "./components/4thsem.jsx";
import Sem5 from "./components/5thsem.jsx";
import Sem6 from "./components/6thsem.jsx";
import Sem7 from "./components/7thsem.jsx";
import Sem8 from "./components/8thsem.jsx";
import Pcycle from "./components/pcycle.jsx";
import Ccycle from "./components/ccycle.jsx";
import PcChoice from "./components/PcChoice.jsx";

// import {  } from "react-router-dom";

const App = () => {
  return (
    // <div>
    //   < Header/>
    // <RouterProvider router={approuter}/>
    // </div>
    <Router basename="{import.meta.env.DEV ? '/' : '/.github/'}">
      <Header />
      <Routes>
        <Route path="/GPAGURU" element={<Home />} />
        <Route path="/cschoice" element={<Csgpa />} />
        <Route path="/cg_scheme22" element={<Cgpa />} />
        <Route path="/s_scheme22" element={<PcChoice />} />
        <Route path="/p_scheme22" element={<Pcycle />} />
        <Route path="/c_scheme22" element={<Ccycle />} />
        <Route path="/2ndsem" element={<Sem2 />} />
        <Route path="/3rdsem" element={<Sem3 />} />
        <Route path="/4thsem" element={<Sem4 />} />
        <Route path="/5thsem" element={<Sem5 />} />
        <Route path="/6thsem" element={<Sem6 />} />
        <Route path="/7thsem" element={<Sem7 />} />
        <Route path="/8thsem" element={<Sem8 />} />
      </Routes>
    </Router>
  );
};

// const approuter = createBrowserRouter([
//   {
//     path:"/GPAGURU",
//     element:<Home/>
//   },
//   {
//     path:"/cschoice",
//     element:<Csgpa/>,
//   },
//   {
//     path:"/scheme22",
//     // element:<Scheme22/>,

//   },
//   {
//     path:"/cg_scheme22",
//     element:<Cgpa/>,
//   },
//   {
//     path:"/s_scheme22",
//     // element:<Sgpa/>,
//     element:<PcChoice/>,
//   },
//   {
//     path:"/p_scheme22",
//     // element:<Sgpa/>,
//     element:<Pcycle/>,
//   },
//   {
//     path:"/c_scheme22",
//     // element:<Sgpa/>,
//     element:<Ccycle/>,
//   },
//   {
//     path:"/2ndsem",
//     element:<Sem2/>,
//   },
//   {
//     path:"/3rdsem",
//     element:<Sem3/>,
//   },
//   {
//     path:"/4thsem",
//     element:<Sem4/>,
//   },
//   {
//     path:"/5thsem",
//     element:<Sem5/>,
//   },
//   {
//     path:"/6thsem",
//     element:<Sem6/>,
//   },
//   {
//     path:"/7thsem",
//     element:<Sem7/>,
//   },
//   {
//     path:"/8thsem",
//     element:<Sem8/>,
//   }

// ])

export default App;