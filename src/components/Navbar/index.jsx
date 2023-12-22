import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-bootstrap";

import "./Style.css";

import PowerBiLogo from "../../assets/icons/power-bi.png";
import PlusIcon from "../../assets/icons/plus-circle.svg";
import { Link } from "react-router-dom";

function MenuNavbar({handleShow}) {
  return (
 
        <Navbar id="container-nav" className="">
          <div className="navigation">
          <Link to="/">
            <img src={PowerBiLogo} alt="DashboardSwiper" />
          </Link>

            <div className="dashboard-container" >
              <NavLink className="dashboard-button" href="/dashboards" >Dashboards</NavLink>
            </div>
          </div>
          <Button  variant="warning"  className="rounded-circle container-button" onClick={handleShow}>
            <img src={PlusIcon} alt="plus icon" className="plus-icon" />
          </Button>
        </Navbar>
  );
}

export default MenuNavbar;
