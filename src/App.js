import './App.css';
import profileImage from './images/profile-image.jpg';
import { useRef } from 'react';
function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const keySkills = useRef(null);
  const education = useRef(null);
  const personalDetails = useRef(null);

  return (
    <div className='bg-color'>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img className='profile-img' src={profileImage} alt="no image " />
          <h2 className="name">Tejal Kadam
            <span className="back">Tejal Kadam</span>
          </h2>
          <p className='sub-title'>Full stack Developer</p>
        </header>

        <ul id="tab_nav">
          <li>
            <a href="#Home">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me">
              About Me
            </a>
          </li>
          <li >
            <a href="#key-skills">
              Key Skills
            </a>
          </li>
          <li>
            <a href="#education">
              Education
            </a>
          </li>
          <li>
            <a href="#personal-details">
              Personal Details
            </a>
          </li>
        </ul>
      </nav>

      <div ref={home} id="Home" className="content-section">
        <div className='content-section-home'>
          <div>
            <h1>Hi,I'm <span>Tejal !</span></h1>
            <h2>Full Stack</h2>
            <h2>Developer</h2>
            <a className='downloadBtn' href='#home' >Download Resume</a>
          </div>
          <div>
            <img className='main-img' src={profileImage} alt="no image " />
          </div>
        </div>
      </div>
      <div ref={aboutMe} id="about-me" className="content-section">
      <div className='content-section-about-me'>
          <div>
            <h1>Hi,I'm <span>Tejal !</span></h1>
            <h2>Full Stack</h2>
            <h2>Developer</h2>
            <a className='downloadBtn' href='#home' >Download Resume</a>
          </div>
          <div>
            <img className='main-img' src={profileImage} alt="no image " />
          </div>
        </div>
      </div>
      <div ref={keySkills} id="key-skills" className="content-section">
        <h1>Key Skills</h1>
      </div>
      <div ref={education} id="education" className="content-section">
        <h1>Education</h1>
      </div>
      <div ref={personalDetails} id="personal-details" className="content-section">
        <h1>Personal Details</h1>
      </div>

    </div>
  );
}



export default App;
