import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Style.css";
import PowerBiLogo from "../../assets/icons/power-bi.png"

function MenuNavbar(){
    return (
      <Navbar id="container-nav" className="bg-body-tertiary">
          <img src={PowerBiLogo} alt="DashboardSwiper" />
          <Button type="submit" variant="primary" className="rounded-circle">+</Button>
      </Navbar>
    );
    
}

export default MenuNavbar;
