import Main from "../../components/Main"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalComponent from "../../components/Modal";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";

const Home = () => {

  const [showModal, setShowModal] = useContext(ModalContext)


  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return(
    <div id="container">
        <Header handleShow={handleShow}/>
        <ModalComponent show={showModal} handleClose={handleClose}/>
        <Main />
        <Footer />
  </div>
  )
}


export default Home