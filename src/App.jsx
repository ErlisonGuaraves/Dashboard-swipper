import Home from "./pages/Home";
import Presentation from "./pages/Presentation"
import Dashboards from "./pages/Dashboards";
import Header from "./components/Header";

// components

import Footer from "./components/Footer";

import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { ModalContextProvider } from "./contexts/ModalContext";
import Main from "./components/Main";

function App() {


  const [links, setLinks] = useState([])
  const [time, setTime] = useState(20000)

  
  return (
    <>
    <ModalContextProvider>
   <BrowserRouter basename="/">

    <Main>
        <Routes>
            <Route path="/" >
                  <Route index element={<Home />}/>
                  <Route path="/dashboards" element={<Dashboards/>} />
            </Route>
            <Route path="/presentation/:id" element={<Presentation time={time} links={links}/>} />
        </Routes>
       </Main>
      
   </BrowserRouter>
   </ModalContextProvider>
    </>
  );
}

export default App;
