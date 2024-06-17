import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import './Launch.css';  
// import './CSS/LaunchCard.css' //Contains LaunchCard CSS
// import '../query.js'
import { useQuery } from '@apollo/client';
import BannerCard from './BannerCard.js';
import { GET_DATA } from '../query.js';

function Launches() {

  const { loading, error, data } = useQuery(GET_DATA); //Getting data as per Query


  const [activeSection, setActiveSection] = useState('upcoming');
  const showUpcomingLaunches = () => setActiveSection('upcoming');
  const showPastLaunches = () => setActiveSection('past');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <main className='main'>

      <Navbar/>

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
          {
            <div>
              {data.u_launches.map(launch => (
                <BannerCard missionName={launch.missionName}
                launchdatetime={launch.launchdatetime}
                launchpad={launch.launchpad}></BannerCard>
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
