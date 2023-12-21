import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "./Style.css";

import PowerBiLogo from "../../assets/icons/power-bi.png";
import PlusIcon from "../../assets/icons/plus-circle.svg";

function MenuNavbar({handleShow}) {
  return (
      <Navbar id="container-nav" className="">
        <img src={PowerBiLogo} alt="DashboardSwiper" />
        <Button  variant="warning"  className="rounded-circle container-button" onClick={handleShow}>
          <img src={PlusIcon} alt="plus icon" className="plus-icon" />
        </Button>
      </Navbar>
  );
}

export default MenuNavbar;
