import React from 'react'
import requests from '../requests'
import Nav from './Nav/Nav'
import Banner from './Banner/Banner'
import Row from './Row/Row'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rating" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen