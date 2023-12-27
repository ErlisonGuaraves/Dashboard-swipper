import { db } from '../../connection/firebase';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dashboard from "../../assets/dashboard.png"
import "./styles.css"
import { doc, deleteDoc } from "firebase/firestore";

// hooks
import { useFetchData } from "../../hooks/useFetchData";
import { useEffect } from 'react';




const CardComponent = ({dash, deleteCard}) => {

  const { deleteDashById } = useFetchData()

  return (
      <Card>
      <Card.Body id="container-cards">  
        <Card.Title>{dash.dados.nome}</Card.Title>
        <Card.Subtitle>Tempo de Transição: {dash.dados.time}</Card.Subtitle>
        <div className="actions">
          <Button variant="danger" onClick={() => deleteDashById(dash.id)}>Excluir</Button>
          <a variant="primary" target='_blank' type='button' href={`http://localhost:5173/presentation/${dash.id}`}>Apresentar</a>
        </div>
      </Card.Body>
    </Card>    
  );
};

export default CardComponent;