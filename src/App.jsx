import Home from "./pages/Home";
import Presentation from "./pages/Presentation"
import Dashboards from "./pages/Dashboards";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {


  const [links, setLinks] = useState([])
  const [time, setTime] = useState(20000)

  
  return (
    <>
   <BrowserRouter basename="/">
   <ModalContextProvider>
      <Routes>
          <Route path="/" >
            {/* show, handleShow, handleClose, setTime, setLinks */}
                <Route index element={<Home />}/>
                <Route path="/dashboards" element={<Dashboards/>} />
          </Route>
          <Route path="/presentation/:id" element={<Presentation time={time} links={links}/>} />
      </Routes>
      </ModalContextProvider>

   </BrowserRouter>

    </>
  );
}

export default App;
