import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="app">

      <Nav/>      
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

      
    </div>
  );
}

export default App;
