import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <div id="search" className="mt-4">
      <Form inline>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Form.Control
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="nome do Dashboard"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto" className="custom-mr">
            {" "}
            {/* Adicione a classe custom-mr para ajustar a margem à direita */}
            <Button type="submit">buscar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchFilter;
