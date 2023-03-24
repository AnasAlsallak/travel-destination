import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
const tourdata = require('../../data/db.json');


function Home (){
    return (
        <div className="home">
        <Header/>
        <Tours arrData={tourdata}/>
        <Footer/>
        </div>
    )
}

export default Home;
