import Main from "../../components/Main"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalComponent from "../../components/Modal";

const Home = ({show, handleShow, handleClose}) => {
  return(
    <div id="container">
        <Header handleShow={handleShow}/>
        <ModalComponent show={show} handleClose={handleClose}/>
        <Main />
        <Footer />
  </div>
  )
}


export default Home