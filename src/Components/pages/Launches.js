import React, { useState, useEffect } from 'react';
import Navbar from '../util/Navbar.js';
import '../util/CSS/Launch.css';
import UpLaunchData from '../DataComps/UpLaunchData.js';
import { useQuery } from '@apollo/client';
import { GET_UPCOMING_DATA } from '../Queries/uLaunch.js';
import { updateWrappedQueryRef } from '@apollo/client/react/internal';

function Launches() {
  const [activeSection, setActiveSection] = useState('upcoming');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [upcomingLaunches,setupcomingLaunches] = useState([])
  const [pastLaunches,setpastLaunches] = useState([])
  const [filterSet, setFilterSet] = useState([])

  const { loading, error, data } = useQuery(GET_UPCOMING_DATA);

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



  useEffect(() => {
    setFilterSet(data)

    
  }, [data])

  const filterResultSet = (event) => {
    let query = event.target.value || "";
    console.log(query);

    if (query == "") {
      setFilterSet(data)
    } else {

      let lowerCaseQuery = query.toLowerCase();

      const filteredData = data.u_launches.filter((launches) => {

        if (launches.missionName.toLowerCase().includes(lowerCaseQuery)) {
          return true;
        }
        return false;
        // Add more filters here 
        // if(launches.missiondescription.toLowerCase().includes(lowerCaseQuery)){
        //   return true;
        // }

      })
      // console.log(filteredData);
      
      setFilterSet({u_launches:filteredData})
      console.log("filterSet",filterSet);
      
    }
  }

  useEffect(()=>{
    const today = new Date();

    const upData = filterSet?.u_launches?.filter(launch => new Date(launch.launchdatetime) > today);

    const pastData = filterSet?.u_launches?.filter(launch => new Date(launch.launchdatetime) <= today);

    setupcomingLaunches(upData)
    setpastLaunches(pastData)

    console.log("Up: ",upData);
    console.log("Past",pastLaunches);
    
    
  },[filterSet,data])

 


  return (
    <main className='main'>
      <div className={`navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
        <Navbar />
      </div>

      {/* Navigation Buttons on top */}
      <div className='buttonContainer'>

        <div className='searchbox'>
          <input type='text' placeholder='Search here' className='inputbox' onChange={filterResultSet}></input>
          <button className='inputbtn' >
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/recurring-appointment.png" alt="recurring-appointment"/>
          </button>
        </div>

        <div className='sectionbox'>
          <button className='buttonbest' onClick={showUpcomingLaunches} role="button">
            <span className="text">Upcoming Launches</span>
          </button>
          <button className='buttonbest' onClick={showPastLaunches} role="button">
            <span className="text">Past Launches</span>
          </button>
        </div>
      </div>

      <div className='content'>
        {loading && <div className="loader"></div>}
        {error && <p>Error: {error.message}</p>}

        {activeSection === 'upcoming' &&
          <div className='upcomingsection'>

            <UpLaunchData launches={upcomingLaunches} />
          </div>
        }

        {activeSection === 'past' &&
          <div className='pastsection'>

            <UpLaunchData launches={pastLaunches} />
          </div>
        }
      </div>
    </main>
  );
}

export default Launches;
