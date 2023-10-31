import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Cschoice from "./components/Cschoice.jsx";
import Cgpa from "./components/cgpa/cgpa.jsx";
import Sem2 from "./components/cgpa/2ndsem.jsx";
import Sem3 from "./components/cgpa/3rdsem.jsx";
import Sem4 from "./components/cgpa/4thsem.jsx";
import Sem5 from "./components/cgpa/5thsem.jsx";
import Sem6 from "./components/cgpa/6thsem.jsx";
import Sem7 from "./components/cgpa/7thsem.jsx";
import Sem8 from "./components/cgpa/8thsem.jsx";
import Pcycle from "./components/sgpa/pcycle.jsx";
import Ccycle from "./components/sgpa/ccycle.jsx";
import PcChoice22 from "./components/PcChoice22.jsx";

const App = () => {
  return (
    // <div>
    //   < Header/>
    // <RouterProvider router={approuter}/>
    // </div>
    <Router>
      <Header />
      <Routes>
        <Route path="/GPAGURU" element={<Home />} />
        <Route path="/GPAGURU/cschoice" element={<Cschoice />} />
        <Route path="/GPAGURU/cg_scheme22" element={<Cgpa />} />
        <Route path="/GPAGURU/s_scheme22" element={<PcChoice22 />} />
        <Route path="/GPAGURU/p_scheme22" element={<Pcycle />} />
        <Route path="/GPAGURU/c_scheme22" element={<Ccycle />} />
        <Route path="/GPAGURU/2ndsem" element={<Sem2 />} />
        <Route path="/GPAGURU/3rdsem" element={<Sem3 />} />
        <Route path="/GPAGURU/4thsem" element={<Sem4 />} />
        <Route path="/GPAGURU/5thsem" element={<Sem5 />} />
        <Route path="/GPAGURU/6thsem" element={<Sem6 />} />
        <Route path="/GPAGURU/7thsem" element={<Sem7 />} />
        <Route path="/GPAGURU/8thsem" element={<Sem8 />} />
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
