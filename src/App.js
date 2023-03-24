//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './component/Home/Home';
import TourDetails from './component/TourDetails/TourDetails'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </div>
  );
}

export default App;
