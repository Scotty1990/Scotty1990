import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal';

function App() {
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
      <div id="top"></div>
        <div className="padding-section"></div>
      <div>
        <img id="profile-pic" src="https://imgur.com/AK6BmTc.png" alt="scott-macleod" />
      </div>
      <div>SCOTT MACLEOD</div>
      <div id="portfolio"></div>
      <div className="padding-section"></div>
      Portfolio
      <div className='test'>

      </div>
      <div id="about">
        <div className="padding-section"></div>
        About
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
