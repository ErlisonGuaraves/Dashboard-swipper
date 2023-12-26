import { useEffect } from 'react';
import { db } from '../../connection/firebase';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dashboard from "../../assets/dashboard.png"
import "./styles.css"
import { doc, deleteDoc } from "firebase/firestore";


const CardComponent = ({dash, setDashs}) => {

  console.log(dash)
  async function deleteCard(){
      try{
        console.log("asqui")
        const dashRef = await doc(db, "dashboards", dash.id)
        const result = await deleteDoc(dashRef)

        setDashs((dashItem) => {
          if(dashItem.id != dash.id){
            return [
              dashItem
            ]
          }
        })

        window.location.reload(false)

      }catch(err){
        console.log(err)
      }
  }

  return (
      <Card>
      <Card.Body id="container-cards">
        <div id="container-iframe">
            <img src={Dashboard} />
        </div>
        <Card.Title>{dash.dados.nome}</Card.Title>
        <Card.Subtitle>Tempo de Transição: {dash.dados.time}</Card.Subtitle>
        <div className="actions">
          <Button variant="danger" onClick={deleteCard}>Excluir</Button>
          <a variant="primary"  type='button' href={`http://localhost:5173/presentation/${dash.id}`}>Apresentar</a>
        </div>
      </Card.Body>
    </Card>    
  );
};

export default CardComponent;