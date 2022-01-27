import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function App() {
  const [showFlashCards, setShowFlashCards] = useState(false)
  const [showBookApp, setShowBookApp] = useState(false)
  const [showLibraryDatabase, setShowLibraryDatabase] = useState(false)
  const [showSuperHeroDatabase, setShowSuperHeroDatabase] = useState(false)
  const handleShowFlashCards = () => setShowFlashCards(true)
  const handleCloseFlashCards = () => setShowFlashCards(false)
  const handleShowBookApp = () => setShowBookApp(true)
  const handleCloseBookApp = () => setShowBookApp(false)
  const handleShowLibraryDatabase = () => setShowLibraryDatabase(true)
  const handleCloseLibraryDatabase = () => setShowLibraryDatabase(false)
  const handleCloseSuperHeroDatabase = () => setShowSuperHeroDatabase(false)
  const handleShowSuperHeroDatabase = () => setShowSuperHeroDatabase(true)

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
          <div className='portfolio-divs' onClick={handleShowFlashCards}>
            <h2 className='portfolio-titles'>MEMORY CARDS</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowBookApp}>
            <h2 className='portfolio-titles'>BOOK APP</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowLibraryDatabase}>
            <h2 className='portfolio-titles-two-words'>LIBRARY DATABASE</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowSuperHeroDatabase}>
            <h2 className='portfolio-titles-two-words'>SUPERHERO DATABASE</h2>
          </div>
        </div>
        <Modal centered show={showFlashCards} onHide={handleCloseFlashCards}>
          <Modal.Header closeButton>
            <Modal.Title>SIMPSONS MEMORY CARDS</Modal.Title>
          </Modal.Header>
          <Modal.Body id="flash-cards-modal">
            <img id="simpsons-card-game-image" src='https://imgur.com/s59ri2r.png' alt='simpsons-memory-card-game-screenshot' />
            <p className='portfolio-descriptions'>Shown here is a memory card game featuring characters from The Simpsons. Built with HTML, CSS, and Vanilla JavaScript, this card game was among my first projects. Click on a card to see what's beneath, then click another card to see if they match. The program will see if they match, and if they do the user gets a point! Play with one player or two, and if you want you can type your names in for a more personalized feel. If you want to start over just click the reset button.</p>
          </Modal.Body>
          <Modal.Footer>
            <Nav>
              <Nav.Item>
                <Nav.Link href="https://pages.git.generalassemb.ly/scottmacleod/FlashCards/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showBookApp} onHide={handleCloseBookApp}>
          <Modal.Header closeButton>
            <Modal.Title>BOOK APP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="https://imgur.com/jNmX2Ns.png" alt="book-app-screenshot" />
            <p className='portfolio-descriptions'>People that like to read often don't know what to read next. I have created an app that will give random suggestions based on genre. On my app I have included sections where the user can log books that they have read or books that they want to read. I also included a section for people to write thoughts that they might have about an author or a book. Others can upvote or downvote the comments as they please.</p>
          </Modal.Body>
          <Modal.Footer>
          <Nav>
              <Nav.Item>
                <Nav.Link href="https://bookappscottmacleod.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showLibraryDatabase} onHide={handleCloseLibraryDatabase}>
          <Modal.Header closeButton>
            <Modal.Title>LIBRARY DATABASE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here</p>
          </Modal.Body>
          <Modal.Footer>
          <Nav>
              <Nav.Item>
                <Nav.Link href="https://front-end-library.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showSuperHeroDatabase} onHide={handleCloseSuperHeroDatabase}>
          <Modal.Header closeButton>
            <Modal.Title>SUPERHERO DATABASE</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here</p>
          </Modal.Body>

          <Modal.Footer>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://superhero-database-app.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
            </Nav.Item>
          </Nav>
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
