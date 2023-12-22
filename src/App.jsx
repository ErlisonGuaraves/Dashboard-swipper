import Home from "./pages/Home";
import Presentation from "./pages/Presentation"
import Dashboards from "./pages/Dashboards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import "./App.css";

function App() {

  const [show, setShow] = useState(false);
  const [links, setLinks] = useState([])
  const [time, setTime] = useState(20000)

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <>
   <BrowserRouter>
      <Routes>
          <Route path="/" >
                <Route index element={<Home show={show} setLinks={setLinks} setTime={setTime} handleClose={handleClose} handleShow={handleShow} />}/>
                <Route path="/dashboards" element={<Dashboards/>} />
          </Route>
          <Route path="/presentation/:id" element={<Presentation time={time} links={links}/>} />
      </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
