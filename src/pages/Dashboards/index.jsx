import { useEffect, useState } from "react";
import { db } from "../../connection/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardComponent from "../../components/Card";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import ModalComponent from "../../components/Modal";

import "./styles.css";
import Spinner from 'react-bootstrap/Spinner';

const Dashboards = () => {
  const [dashs, setDashs] = useState([]);
  const [showModal, setShowModal] = useContext(ModalContext);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    async function getData() {
      try {
        const q = query(collection(db, "dashboards"));
        const querySnapshot = await getDocs(q);
        let dados = [];

        querySnapshot.forEach((doc) => {
          dados.push({
            id: doc.id,
            dados: doc.data()
          });
        });

        setDashs(dados);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <main id="container">
      <Header handleShow={handleShow} />
      <ModalComponent setDashs={setDashs} show={showModal} handleClose={handleClose} />
      <div id="container-dashboards">
        {dashs.length > 0 ? (
          dashs.map((dash) => <CardComponent dash={dash} setDashs={setDashs} />)
        ) : (
          <h1>Nenhum dashboard encontrado</h1>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Dashboards;
