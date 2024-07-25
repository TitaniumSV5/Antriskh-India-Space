import React from 'react';
import './CSS/navAnimate.css';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './CSS/hamburgers.css'

function Navbar() {

  const toggleHamburger = ()=>{
    const doc = document.querySelector('.hamburger')
    console.log("doc",doc);
    
    if(doc.classList.contains("is-active")){
      doc.classList.remove("is-active")
    }else{
      doc.classList.add("is-active")
    }
  }
  const resetSidebar = () =>{

  }

  return (
    <>
      <navbar className='flex justify-between items-center bg-[#53B4FF] h-20  w-full sm:px-10 px-5'>
        <div className=''>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-[180px] h-full shadow-xl my-5' />
          </Link>
        </div>
        <div className='hidden md:flex list-none gap-14 text-xl nav-links'>
          <li className=""><Link to="/Launches">Launches</Link></li>
          <li className="center"><Link to='/Rockets'>Rockets</Link></li>
          <li className="center"><Link to='/Spacecrafts'>Spacecrafts</Link></li>
          <li className="center"><Link to='/Gaganyaan'>Gaganyaan</Link></li>
          <li className="center"><Link to='/Others'>Others</Link></li>
        </div>
        <div className='md:hidden flex gap-2'>
          {/* <p className=''> Menu</p> */}
          <button className="hamburger hamburger--collapse is-active" type="button" onClick={toggleHamburger}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </navbar>
    </>
  );
}

export default Navbar;
