// firestore database instance
import { db } from "../../connection/firebase";

// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardComponent from "../../components/Card";
import ModalContext from "../../contexts/ModalContext";
import ModalComponent from "../../components/Modal";

// hooks
import { useFetchData } from "../../hooks/useFetchData";
import { useContext } from "react";
import { useEffect } from "react";

// styles
import "./styles.css";

const Dashboards = () => {

  const {dashs, getAllDashs, setDashs} = useFetchData()
  const [showModal, setShowModal] = useContext(ModalContext);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    getAllDashs()
  }, []);

  return (
    <main id="container">
      <Header handleShow={handleShow} />
      <ModalComponent  show={showModal} handleClose={handleClose} setDashs={setDashs} />
      <div id="container-dashboards">
        {dashs.length > 0 ? (
          dashs.map((dash) =>  <CardComponent dash={dash} setDashs={setDashs} />)
        ) : (
          <h1>Nenhum dashboard encontrado</h1>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Dashboards;
