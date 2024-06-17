import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import './Launch.css';  
import '../query.js'

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
          {
          <div style={styles.container}>
          {data.u_launches.map(launch => (
            <CardComponent
              key={launch.missionName}
              missionName={launch.missionName}
              launchpayload={launch.launchpayload}
              payloadmass={launch.payloadmass}
              launchdatetime={launch.launchdatetime}
              launchorbit={launch.launchorbit}
              launchpad={launch.launchpad}
              launchvehicle={launch.launchvehicle}
              liftoff={launch.liftoff}
              coverimage={launch.coverimage}
              createdBy={launch.createdBy}
            />
          ))}
        </div>
          
                
          
          
          
          /* //   <button class="button-89" role="button">
          //     <div className='launchName'>Name of the Mission</div>
          //     <div className='launchDescription'>Time and Pad</div>
          //   </button>
          //   <button class="button-89" role="button">
          //     <div className='launchName'>Name of the Mission</div>
          //     <div className='launchDescription'>Time and Pad</div>
          //   </button>
          //   <button class="button-89" role="button">
          //     <div className='launchName'>Name of the Mission</div>
          //     <div className='launchDescription'>Time and Pad</div>
          //   </button>
          //   <button class="button-89" role="button">
          //     <div className='launchName'>Name of the Mission</div>
          //     <div className='launchDescription'>Time and Pad</div>
          //   </button><button class="button-89" role="button">
          //     <div className='launchName'>Name of the Mission</div>
          //     <div className='launchDescription'>Time and Pad</div>
          //   </button> */}
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
