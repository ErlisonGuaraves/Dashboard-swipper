import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../connection/firebase';
import './styles.css';

const CardComponent = ({ dash, setDashs }) => {
  async function deleteCard() {
    try {
      const dashRef = doc(db, 'dashboards', dash.id);
      await deleteDoc(dashRef);

      setDashs((dashItem) => dashItem.filter((item) => item.id !== dash.id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card>
      <Card.Body id="container-cards">
        <Card.Title>{dash.dados.nome}</Card.Title>
        <Card.Subtitle>Tempo de Transição: {dash.dados.time} segundos</Card.Subtitle>
        <div className="actions">
          <Button variant="danger" onClick={deleteCard}>
            Excluir
          </Button>
          <a
            variant="primary"
            type="button"
            href={`/presentation/${dash.id}`}
          >
            Apresentar
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
