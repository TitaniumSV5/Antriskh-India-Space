import React from 'react';
import Navbar from './Navbar.js';

function Home() {
  return (
    <main>
        <Navbar/>
        <div className='content'>
          This is Home Page
        </div>
    </main>
  );
}

export default Home;
