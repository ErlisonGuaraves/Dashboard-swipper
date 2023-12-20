import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Style.css";
import PowerBiLogo from "../../assets/icons/power-bi.png"

function MenuNavbar(){
    return (
        <Navbar id="container" className="bg-body-tertiary justify-content-between">
          <h1>DashboardSwiper </h1>  
          <Row className="w-100 justify-content-end">
            <Col xs="auto">
                <Button type="submit" variant="primary" className="rounded-circle">+</Button>
            </Col>
          </Row>
          </div>
        </Navbar>
    );
    
}

export default MenuNavbar;
