import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


// assets

import DashboardIcon from "../../assets/icons/dashboard.svg"

  function ModalComponent({show, handleClose, setTime, setLinks}) {

  const navigate = useNavigate()

  const [linksModal1, setLinksModal1] = useState("")
  const [linksModal2, setLinksModal2] = useState("")
  const [timeModal, setTimeModal] = useState("")
  const[messageError, setMessageError] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    if(linksModal1 != "" && linksModal2 != "" && Number.isInteger(Number(timeModal))){
      setTime(timeModal)
      setLinks((links) => {
        return [
          ...links,
          linksModal1,
          linksModal2
        ]
      })
    }else{
      setMessageError("Alguma coisa deu errado, verifique os campos")
      return
    }

    

    handleClose()
    navigate("/presentation")

  }

  return (
    <>
      <Modal show={show} onHide={handleClose} id="container-modal">
        <Modal.Header closeButton>
          <Modal.Title>Adicione os seus Dashboards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><img src={DashboardIcon} style={{width: "20px"}}/> </InputGroup.Text>
              <Form.Control
                placeholder="Nome de apresentação"
                aria-label="presentation"
                aria-describedby="basic-addon1"
              />
        </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"> <img src={DashboardIcon} style={{width: "20px"}} alt="Logo de Dashboard"/> </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setLinksModal1(e.target.value)}
                    placeholder={"Link 1" }
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"> <img src={DashboardIcon} style={{width: "20px"}} alt="Logo de Dashboard"/> </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setLinksModal2(e.target.value)}
                    placeholder={"Link 2"}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
          <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><img src={DashboardIcon} style={{width: "20px"}}/> </InputGroup.Text>
              <Form.Control
                onChange={(e) => setTimeModal(e.target.value)}
                type='number'
                placeholder="Tempo (em seg)"
                aria-label="presentation"
                aria-describedby="basic-addon1"
              />  
          </InputGroup>    
        {messageError && (<Alert variant="danger" >{messageError}</Alert>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {
            setMessageError("")
            handleClose()
          }}>
            Close
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
