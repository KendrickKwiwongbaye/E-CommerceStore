import React from 'react';
import './App.css';
import Signup from './Signup';
import Homepage from './Homepage';
import Homepage2 from './Homepage2';
import MensNav from './MenNav';
import WomensNav from './WomensNav';
import ElectronicsNav from './ElectronicsNav';
import JeweleryNav from './JeweleryNav';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path ="/home2" element={<Homepage2/>} />
          <Route exact path="/women" element={<WomensNav />} />
          <Route exact path="/men" element={<MensNav />} />
          <Route exact path="/electronics" element={<ElectronicsNav />} />
          <Route exact path="/jewelery" element={<JeweleryNav />} />
          <Route path="/women/:id" element={<ItemDetail />}/>        //**Router es6 doesnt allow array combination
          <Route path="/men/:id" element={<ItemDetail />}/>          //**Router es6 doesnt allow array combination
          <Route path="/electronics/:id" element={<ItemDetail />}/>  //**Router es6 doesnt allow array combination
          <Route path="/jewelery/:id" element={<ItemDetail />}/>     //**Router es6 doesnt allow array combination
          <Route path="/home/:id" element={<ItemDetail />} />        //**Router es6 doesnt allow array combination
          <Route path="/home2/:id" element={<ItemDetail />} />        //**Router es6 doesnt allow array combination
        </Routes>
      </div>
    </Router>
  );
}

export default App;
