import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Asok Tamang</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/hero" className="nav-link">Hero Section</Link>
            </li>
            <li className="nav-item">
              <Link to="/three-column" className="nav-link">Three-Column Section</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-info" onClick={handleShow}>Copyright</button>
            </li>
          </ul>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>© 2025 Your Name. All rights reserved.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;