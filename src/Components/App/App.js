import React from 'react';
import portretBW from '../Images/portretBW.jpg';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portofolio/Portofolio';
import Achievements from '../Achievements/Achievements';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <header id='header'>
        <div class='intro'>
          <div class='container'>
            <div class='intro-text'>
              <h1>Hello, I'm <span class='name'>Vesna Brekalo</span></h1>
              <p>UX Designer & Front End Developer</p>
              <div className='image-intro'>
                <img src={portretBW} className='portretBW' alt='portretBW'/>
                <p>I am an artist in soul, a strategist in mind, a revolutionary in heart.</p>
                <Navigation />
                <About />
                <Skills />
                <Portfolio />
                <Achievements />
                <Resume />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default App;
