import { useEffect, useState } from "react"
import { db } from "../../connection/firebase"
import { collection, query, getDocs } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardComponent from "../../components/Card"

import "./styles.css"
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const Dashboards = ({handleShow}) => {

  const [dashs, setDashs] = useState([])

  useEffect(() => {
    async function getData(){
      try{
        setDashs([])
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

      }
    }
      
    getData()
  }, [])


  return(
    <main id="container">

      <Header handleShow={handleShow}/>

      <div id="container-dashboards" >
      {dashs &&dashs.map(dash => (
          <a href={`http://localhost:5173/presentation/${dash.id}`} target="_blank" >

              <CardComponent dash={dash} />
            </a>
          ))
        }
        

       
       {!dashs && (
            <div className="animation-container" > 
            <Spinner animation="border" role="status">
                Loading
           </Spinner>
           </div>
          )}
            
      </div>
      <Footer />
   </main>
  )
}


export default Dashboards;