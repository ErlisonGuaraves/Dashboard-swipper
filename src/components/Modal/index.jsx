import { db } from "../../connection/firebase";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { collection, addDoc } from "firebase/firestore";

// assets

import DashboardIcon from "../../assets/icons/dashboard.svg";

function ModalComponent({ show, handleClose, setDashs }) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [linksModal1, setLinksModal1] = useState("");
  const [linksModal2, setLinksModal2] = useState("");
  const [selectedTime, setSelectedTime] = useState("10");
  const [messageError, setMessageError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      linksModal1 !== "" &&
      linksModal2 !== "" &&
      name !== "" && 
      selectedTime) {
      try {
        const docRef = await addDoc(collection(db, "dashboards"), {
          nome: name,
          links: [linksModal1, linksModal2],
          time: selectedTime, // Usar o valor do formulário select
        });

        setDashs((dash) => {
          return [
            ...dash,
            {
              id: docRef.id,
              dados: {
                nome: name,
                links: [linksModal1, linksModal2],
                time: selectedTime,
              },
            },
          ];
        });
      } catch (err) {
        setMessageError("Alguma coisa de errado no servidor");
      }
    } else {
      setMessageError("Alguma coisa deu errado, verifique os campos!");
      return;
    }

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} id="container-modal">
        <Modal.Header closeButton>
          <Modal.Title>Adicione os seus Dashboards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <img src={DashboardIcon} style={{ width: "20px" }} />
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome de apresentação"
              aria-label="presentation"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              {" "}
              <img
                src={DashboardIcon}
                style={{ width: "20px" }}
                alt="Logo de Dashboard"
              />{" "}
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setLinksModal1(e.target.value)}
              placeholder={"Iframe 1"}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              {" "}
              <img
                src={DashboardIcon}
                style={{ width: "20px" }}
                alt="Logo de Dashboard"
              />{" "}
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setLinksModal2(e.target.value)}
              placeholder={"Iframe 2"}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <img src={DashboardIcon} style={{ width: "20px" }} />{" "}
            </InputGroup.Text>
            {/*  <Form.Control
                onChange={(e) => setTimeModal(e.target.value)}
                type='number'
                placeholder="Tempo (em seg)"
                aria-label="presentation"
                aria-describedby="basic-addon1"
              />   */}

            <Form.Select
              aria-label="Default select example"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="10">10s</option>
              <option value="20">20s</option>
              <option value="30">30s</option>
              <option value="30">50s</option>
            </Form.Select>
          </InputGroup>
          {messageError && <Alert variant="danger">{messageError}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setMessageError("");
              handleClose();
            }}
          >
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Iniciar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
