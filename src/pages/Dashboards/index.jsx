import { useEffect, useState } from "react";
import { db } from "../../connection/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardComponent from "../../components/Card";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import ModalComponent from "../../components/Modal";
import SearchFilter from "../../components/SearchFilter"; // Importe o componente de filtro

import "./styles.css";

const Dashboards = () => {
  const [dashs, setDashs] = useState([]);
  const [showModal, setShowModal] = useContext(ModalContext);
  const [search, setSearch] = useState("");

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

  // Filtra os dashboards com base na pesquisa
  const filteredDashboards = dashs.filter((dash) => {
    const tituloDashboard = dash.dados.nome.toLowerCase();
    return tituloDashboard.includes(search.toLowerCase());
  });

  return (
    <main id="container">
      <Header handleShow={handleShow} />
      <SearchFilter search={search} setSearch={setSearch} dashs={dashs} /> {/* Adicione o componente de filtro */}
      <ModalComponent setDashs={setDashs} show={showModal} handleClose={handleClose} />
      <div id="container-dashboards">
        {filteredDashboards.length > 0 ? (
          filteredDashboards.map((dash) => <CardComponent dash={dash} setDashs={setDashs} />)
        ) : (
          <h1>Nenhum dashboard encontrado</h1>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Dashboards;
