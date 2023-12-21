import Main from "../../components/Main"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalComponent from "../../components/Modal";

const Home = ({show, handleShow, handleClose, setTime, setLinks}) => {
  return(
    <div id="container">
        <Header handleShow={handleShow}/>
        <ModalComponent show={show} handleClose={handleClose} setLinks={setLinks} setTime={setTime} />
        <Main />
        <Footer />
      </div>
  )
}


export default Home