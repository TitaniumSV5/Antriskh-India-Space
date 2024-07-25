import './App.css';
import {Route, Routes} from 'react-router-dom';

import Launches from './Components/pages/Launches.js';
import Rockets from './Components/pages/Rockets.js'
import Spacecrafts from './Components/pages/Spacecrafts.js';
import Gaganyaan from './Components/pages/Gaganyaan.js'
import Others from './Components/pages/Others.js'
import Home from './Components/pages/Home.js'
import Detailpage from './Components/pages/Detailpage.js'


function App() {
  return (

    <Routes>
      <Route path= "/details" element = {
        <Detailpage/>
      } />

      <Route index element={
        <Home/>
      }/>

      <Route path= "/Launches" element = {
        <Launches/>
      } />

      <Route path= "/Rockets" element = {
        
        <Rockets/>
        
      } />

      <Route path= "/Spacecrafts" element = {
       
        <Spacecrafts/>
       
      } />

      <Route path= "/Gaganyaan" element = {
        <Gaganyaan/>
      } />

      <Route path= "/Others" element = {
        <Others/>
      } />

      
    </Routes>
  );
}

export default App;
