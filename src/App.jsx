import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import DarkMode from "./Components/DarkMode";

import './App.css'

function App() {

  const [data, setData] = useState(false);
  return (
    <>
      {/* <BrowserRouter>
            <Routes>
              <Route path="/"  element={ [<Navbar SetDarkModeValue={setData}/>, <Header  />,<About/>,<Skills/>,<Experience/>,<Work/>,<Testimonials/>,<Footer/>]}>
              </Route>
            </Routes>
        </BrowserRouter> */}
        sdawe
    </> 
  )
} 

export default App
