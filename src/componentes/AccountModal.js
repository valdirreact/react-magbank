import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AccountModal = ( { show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Abra a sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group controlId="formBasicEmail">
      <Form.Label> seu nome</Form.Label>
      <Form.Control Type="text" placeholder="seu nome"/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
      <Form.Label> Seu Email</Form.Label>
      <Form.Control Type="Email" placeholder="Seu Email"/>
  </Form.Group>

  <Form.Group controlId="formCity">
  <Form.Label className="my-1 mr-2" htmlfor="formCitySelect"> 
      Preference
      </Form.Label>
      <Form.Control as="select" className="my-1 mr-2" id="formCityselect" custom>
          <option value="0">Florianópoles - SC</option>
          <option value="1">Curitiba - PR</option>
          <option value="2">São Paulo - SP</option>
          <option value="3">Caxias - MA</option>
      </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Eu li e concordo com os termos de uso."/>

      </Form.Group>
   </Form>
  </Modal.Body>
  <Modal.Footer>
      <Button variant="secondary" onclick={handleClose}>Cancelar</Button>
      <Button variant="primary" onclick={handleClose}>Criar Conta</Button>
  </Modal.Footer>
 </Modal>

);
 
export default AccountModal;
