import { useEffect, useState } from "react"
import { db } from "../../connection/firebase"
import { collection, query, getDocs } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardComponent from "../../components/Card"
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import ModalComponent from "../../components/Modal";

import "./styles.css"
import Spinner from 'react-bootstrap/Spinner';


const Dashboards = () => {

  const [dashs, setDashs] = useState([])

  console.log(dashs)

  const [showModal, setShowModal] = useContext(ModalContext)
  const [showMessage, setShowMessage] = useState(false)

  console.log(showModal)

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    async function getData(){
      try{
          console.log("no try")
          setDashs([])
          setShowMessage(false)
    
          const q = query(collection(db, "dashboards"));
          const querySnapshot = await getDocs(q);
          let dados = [];
  
  
          querySnapshot.forEach((doc) => {
              dados.push({
                "id": doc.id,
                "dados": doc.data()
              })
          });

          setDashs(dados)      


  
      }catch(err){
        console.log(err)
        console.log("no catch")
      }
    }
      
    getData()
  }, [])


  console.log(showMessage)

  return(
    <main id="container">
      <Header handleShow={handleShow}/>
      <ModalComponent setDashs={setDashs} show={showModal} handleClose={handleClose}/>
      <div id="container-dashboards" >
      {dashs && dashs.map(dash => (
              <CardComponent dash={dash} setDashs={setDashs} />
          ))
        }
       {showMessage && (<h1>Nenhum dashboard encontrado</h1>)}
            
      </div>
      <Footer />
   </main>
  )
}


export default Dashboards;