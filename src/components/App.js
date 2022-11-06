import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
// import Banner from "./Banner";

// function App() {
//   return <Banner />;
// }

const App =()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element ={<Home />} />
      <Route path= "/about" element ={<About />} />
      {/*<Route path= "*" element ={<error />} />*/}
      </Routes>
      </BrowserRouter>
  )
}
export default App;
