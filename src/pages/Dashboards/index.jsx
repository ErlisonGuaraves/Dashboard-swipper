import { useEffect, useState } from "react"
import { db } from "../../connection/firebase"
import { collection, query, getDocs } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./styles.css"
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const Dashboards = () => {

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
      <Header/>
      <div id="container-dashboards" >
      {dashs &&dashs.map(dash => (
          <Link to={`/presentation/${dash.id}`} >
              <Card className="container-cards">
              <Card.Body>
                <Card.Title>{dash.dados.nome}</Card.Title>
                <div className="actions">
                <Button variant="danger">Excluir</Button>
                <Button variant="primary">Editar</Button>
                </div>
              </Card.Body>
            </Card>
            </Link>
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


export default Dashboards