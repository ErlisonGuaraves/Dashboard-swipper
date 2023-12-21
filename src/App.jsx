import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalComponent from "./components/Modal";

import { useState } from "react";

import "./App.css";

function App() {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <div id="container">
      <Header handleShow={handleShow}/>
      <ModalComponent show={show} handleClose={handleClose} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
