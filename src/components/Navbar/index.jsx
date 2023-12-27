import React, { useState } from 'react';
import { Navbar, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import PowerBiLogo from '../../assets/icons/power-bi.png';
import PlusIcon from '../../assets/icons/plus-circle.svg';
import './Style.css';

function MenuNavbar({ setFilterTerm }) {
  const [_, setShowModal] = useContext(ModalContext);

  const handleShow = () => setShowModal(true);


  return (
    <Navbar id="container-nav">
      <div className="navigation">
        <Link to="/">
          <img src={PowerBiLogo} alt="DashboardSwiper" />
        </Link>

        <div className="dashboard-container">
          <Link to="/dashboards" className="dashboard-button">
            Dashboards
          </Link>
        </div>
      </div>

      
      <Button
        variant="warning"
        className="rounded-circle container-button"
        onClick={handleShow}
      >
        <img src={PlusIcon} alt="plus icon" className="plus-icon" />
      </Button>
    </Navbar>
  );
}

export default MenuNavbar;
