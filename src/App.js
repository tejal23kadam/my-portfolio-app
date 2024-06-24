import './App.css';
import profileImage from './images/profile-image.jpg';
function App() {
  return (
    <div>      
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img src={profileImage} alt="no image " />
          <h2 className="name">Tejal Kadam
            <span className="back">Tejal Kadam</span>
          </h2>
        </header>

        <ul>
          <li>
            <a href="#section1">
              <span className="circle"></span>
              ONE
            </a>
          </li>
          <li>
            <a href="#section2">
              <span className="rect"></span>
              <span className="circle"></span>
              TWO
            </a>
          </li>
          <li>
            <a href="#section3">
              <span className="rect"></span>
              <span className="circle"></span>
              THREE
            </a>
          </li>
          <li>
            <a href="#section4">
              <span className="rect"></span>
              <span className="circle"></span>
              FOUR
            </a>
          </li>
          <li>
            <a href="#section5">
              <span className="rect"></span>
              <span className="circle"></span>
              FIVE
            </a>
          </li>
        </ul>
      </nav>
      
      <section id="section1" className="content-section">
        <h1>SECTION one</h1>
      </section>
      <section id="section2" className="content-section">
        <h1>SECTION two</h1>
      </section>
      <section id="section3" className="content-section">
        <h1>SECTION three</h1>
      </section>
      <section id="section4" className="content-section">
        <h1>SECTION fpour</h1>
      </section>
      <section id="section5" className="content-section">
        <h1>SECTION our</h1>
      </section>
    
    </div>
  );
}



export default App;
