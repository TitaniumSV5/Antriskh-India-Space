import './App.css';
import {Route, Routes} from 'react-router-dom';

import Launches from './Components/Launches.js';
import Rockets from './Components/Rockets.js'
import Spacecrafts from './Components/Spacecrafts.js';
import Gaganyaan from './Components/Gaganyaan.js'
import Others from './Components/Others.js'
import Home from './Components/Home.js'
import Detailpage from './Components/Detailpage.js'


function App() {
  return (

    <Routes>
      <Route path= "/details" element = {
        <div>
          <Detailpage/>
        </div>
      } />

      <Route index element={
        <Home/>
      }/>

      <Route path= "/Launches" element = {
        <div>
          <Launches/>
        </div>
      } />

      <Route path= "/Rockets" element = {
        <div>
          <Rockets/>
        </div>
      } />

      <Route path= "/Spacecrafts" element = {
        <div>
          <Spacecrafts/>
        </div>
      } />

      <Route path= "/Gaganyaan" element = {
        <div>
          <Gaganyaan/>
        </div>
      } />

      <Route path= "/Others" element = {
        <div>
          <Others/>
        </div>
      } />

      
    </Routes>
  );
}

export default App;
