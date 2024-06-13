import React from 'react';
import './Navbar.css';
import Logo from '../Assets/logo.png'; 
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <Link to = '/'>
        <img src={Logo} alt='Logo' className='navbar-logo' />
      </Link>
      <div className='nav-links'>
        <li class="center"><Link to="/Launches">Launches</Link></li>
        <li class="center"><Link to='/Rockets'>Rockets</Link></li>
        <li class="center"><Link to='/Spacecrafts'>Spacecrafts</Link></li> 
        <li class="center"><Link to='/Gaganyaan'>Gaganyaan</Link></li>
        <li class="center"><Link to='/Others'>Others</Link></li> 
      </div>
    </div>
  );
}

export default Navbar;
