import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import './Launch.css';  

function Launches() {





  const [activeSection, setActiveSection] = useState('upcoming');
  const showUpcomingLaunches = () => setActiveSection('upcoming');
  const showPastLaunches = () => setActiveSection('past');

  return (
    <main className='main'>

      <Navbar/>

      <div className='buttonContainer'>
        <button className='buttonbest' onClick={showUpcomingLaunches} role="button">
          <span className="text">Upcoming Launches</span>
        </button>
        <button className='buttonbest' onClick={showPastLaunches} role="button">
          <span className="text">Past Launches</span>
        </button>
      </div>

      <div className='content'>
          {activeSection === 'upcoming' && 
          <div className='upcomingsection'>
            <button class="button-89" role="button">This is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section</button>
            <button class="button-89" role="button">This is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section</button>
            <button class="button-89" role="button">This is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section</button>
          </div>
          }

          {activeSection === 'past' && 
          <div className='pastsection'>
            <button class="button-89" role="button">This is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section</button>
            <button class="button-89" role="button">This is the upcoming launches section. This is the upcoming launches section.This is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches sectionThis is the upcoming launches section</button>
            x
          </div>
          }
      </div>

    </main>
  );
}

export default Launches;
