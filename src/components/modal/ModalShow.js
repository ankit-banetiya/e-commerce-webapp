
import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";


function ModalShow({userName,userLastName,userImage}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={userImage} style={{height:"10%",width:"10%",borderRadius:"10px"}} alt=""/>
           <p>Name : {userName} {userLastName} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-close" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn-logout" onClick={handleClose}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>

  );
}
export default ModalShow