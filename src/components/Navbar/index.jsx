import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Style.css";

function MenuNavbar() {
  return (
    <Navbar  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} className="justify-content-between" bg="white">
      <Row className="w-100">
        <Col>
          <h1>DashboardSwiper</h1>
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="primary">
            +
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
}

export default MenuNavbar;
