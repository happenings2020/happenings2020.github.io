import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
// import Sponsors from './components/Sponsors/Sponsors'
// import Location from './components/Location/Location'
import BottomNav from './components/BottomNav/BottomNav'
// import EventDetails from './components/EventDetails/EventDetails'
import { elite } from './data/eliteEvents'
import { premium } from './data/premiumEvents'
import { standard } from './data/standardEvents'
import { basic } from './data/basicEvents'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />

        <div style={{ textAlign: "center", color: "#e50915", padding: "15px", fontSize: "1.2rem" }}> <span style={{ fontWeight: "bold" }}>Announcement:</span> Happenings has been postponed until further notice. Follow our social media for updates.</div>

        <h2 id="events">Elite Events</h2>
        <Slider>
          {elite.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Premium Events</h2>
        <Slider>
          {premium.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Standard Events</h2>
        <Slider>
          {standard.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Basic Events</h2>
        <Slider>
          {basic.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        {/* <Sponsors /> */}

        {/* <h2>Getting Around</h2> */}

        {/* <Location /> */}

        {/* <EventDetails /> */}

        <Footer />

        <BottomNav />
      </div>
    );
  }
}

export default App;
