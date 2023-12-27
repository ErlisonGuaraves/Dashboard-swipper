import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <div id="search" className="mt-4">
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
          </Col>
        </Row>
    </div>
  );
};

export default SearchFilter;
