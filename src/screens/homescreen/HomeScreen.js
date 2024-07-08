import React from 'react';
import "./HomeScreen.css";
import Nav from '../../components/nav/Nav';
import Banner from '../../components/banner/Banner'
import requests from '../../utils/requests';
import Row from '../../components/rows/Row';
import Footer from '../../components/footer/Footer';

function HomeScreen() {
  return (
    <div className='homeScreen'>
     
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflexOriginals}isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMOvies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMOvies}/>
        <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMOvies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        <Footer/>
    </div>
  )
}

export default HomeScreen
