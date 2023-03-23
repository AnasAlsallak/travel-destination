import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
const tourdata = require('../../data/db.json');


function Home (){
    return (
        <>
        <h1>Anas Alsallak</h1>
        <Header/>
        <Tours arrData={tourdata}/>
        <Footer/>
        </>
    )
}

export default Home;
