import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import './Launch.css';  
import UpLaunchData from './DataComps/UpLaunchData.js';

function Launches() {
  const [activeSection, setActiveSection] = useState('upcoming');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const showUpcomingLaunches = () => setActiveSection('upcoming');
  const showPastLaunches = () => setActiveSection('past');

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // Scrolling down
        } else {
          setShowNavbar(true); // Scrolling up
        }
        setLastScrollY(currentScrollY);
      }, 1); // Adjust the debounce delay as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  return (
    <main className='main'>
      <div className={`navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
        <Navbar />
      </div>

      {/* Navigation Buttons on top */}
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
          <UpLaunchData />
        </div>
        }

        {activeSection === 'past' && 
        <div className='pastsection'>
          <UpLaunchData />
          <div>            
            hi hello I am under the water
          </div>
        </div>
        }
      </div>
    </main>
  );
}

export default Launches;
