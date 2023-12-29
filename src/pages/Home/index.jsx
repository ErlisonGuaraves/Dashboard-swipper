import Main from "../../components/Main";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalComponent from "../../components/Modal";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import Tutorial from "../../components/Tutorial";
import "./styles.css";

const Home = () => {
  const [showModal, setShowModal] = useContext(ModalContext);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Header />
      <div id="container-instructions">
        <ModalComponent show={showModal} handleClose={handleClose} />
        <Tutorial />
      </div>
      <Footer />
    </>
  );
};

export default Home;
