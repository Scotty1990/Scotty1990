import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="App">
      <header>
        <div id="navbar" className='navbar-brand'>
          <p className='nav-links'><a className='a-tags' href="#top">SCOTT MACLEOD</a></p>
          <p className='nav-links'><a className='a-tags' href="#portfolio">PORTFOLIO</a></p>
          <p className='nav-links'><a className='a-tags' href="#about">ABOUT</a></p>
          <p className='nav-links'><a className='a-tags' href="#contact">CONTACT</a></p>
        </div>
      </header>
      <div id="top">
        <div className="padding-section"></div>
        <div>
          <img id="profile-pic" src="https://imgur.com/AK6BmTc.png" alt="scott-macleod" />
        </div>
        <div><p id="name">SCOTT MACLEOD</p></div>
        <div><p id="job-titles">WEB DESIGNER</p></div>
      </div>
      <div id="portfolio">
        <div className="padding-section"></div>
        <p className='titles'>PORTFOLIO</p>
        <div id="portfolio-grid">
          <div className='portfolio-divs' onClick={handleShow}>
            <h2 className='portfolio-titles'>MEMORY CARDS</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShow}>
            <h2 className='portfolio-titles'>BOOK APP</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShow}>
            <h2 className='portfolio-titles'>LIBRARY DATABASE</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShow}>
            <h2 className='portfolio-titles'>SUPERHERO DATABASE</h2>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div id="about">
        <div className="padding-section"></div>
        <p className='titles'>ABOUT</p>
      </div>
      <div className='test'>

      </div>
      <div id="contact">
        <div className="padding-section"></div>
        Contact
      </div>
      <div className='test'>

      </div>
    </div>
  );
}

export default App;
