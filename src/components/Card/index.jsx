import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = ({dash}) => {
  return (
    <Card className="container-cards">
      <Card.Body>
        <Card.Title>{dash.dados.nome}</Card.Title>
        <div className="actions">
          <Button variant="danger">Excluir</Button>
          <Button variant="primary">Editar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;