import { db } from "../../connection/firebase"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { collection, addDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner'
import "./styles.css"

// assets

import DashboardIcon from "../../assets/icons/dashboard.svg"

  function ModalComponent({show, handleClose, setDashs}) {

  const [loading, setLoading] = useState(false) 

  const [name, setName] = useState()
  const [linksModal1, setLinksModal1] = useState("")
  const [linksModal2, setLinksModal2] = useState("")
  const [timeModal, setTimeModal] = useState("")
  const[messageError, setMessageError] = useState("")

  console.log()

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    if(linksModal1 != "" && linksModal2 != "" & name != "" && Number.isInteger(Number(timeModal))){
      try{
        const docRef = await addDoc(collection(db, "dashboards"), {
          nome: name,
          links: [linksModal1, linksModal2],
          time: timeModal
        });


        setDashs((dash) => {
          return [
            ...dash,
            {
              "id": docRef.id,
              "dados": { 
                "nome": name,
                "links": [linksModal1, linksModal2],
                "time": timeModal
              }
            }
          ]
        })

        setLoading(false)
      }
      catch(err){
      setMessageError("Alguma coisa de errado no servidor")
        setLoading(false)
        
      }
    }else{
      setLoading(false)
      setMessageError("Alguma coisa deu errado, verifique os campos!")
      return
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
              <InputGroup.Text id="basic-addon1"><img src={DashboardIcon} style={{width: "20px"}}/> </InputGroup.Text>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
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
            Fechar
          </Button>
          <Button disabled={loading ? true : false} variant="primary" id="button-presentation" onClick={handleSubmit} hei>
            {loading ? <Spinner id="spinner-loading" animation="grow" /> : <span>Criar Apresentação</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
