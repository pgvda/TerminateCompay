import React from 'react';

import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {HomePage, ProjectPage, NavBar, Footer} from './Component/index';

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        {/* <Route path="/project" element={<ProjectPage/>}/> */}
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
