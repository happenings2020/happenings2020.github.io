import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'

const elite = [
  {
    id: 1,
    image: '/images/thecrown.jpg',
    imageBg: '/images/thecrown.jpg',
    title: 'The Crown',
    info: 'Details of the crown'
  },
  {
    id: 2,
    image: '/images/thewalkingdead.jpg',
    imageBg: '/images/thewalkingdead.jpg',
    title: 'The Walking Dead',
    info: 'Details of the walking dead'
  },
  {
    id: 3,
    image: '/images/rhtymflow.jpg',
    imageBg: '/images/rhtymflow.jpg',
    title: 'Rhythm + Flow',
    info: 'Details of the Rhythm + flow'
  },
  {
    id: 4,
    image: '/images/peakyblinders.jpg',
    imageBg: '/images/peakyblinders.jpg',
    title: 'Peaky Blinders',
    info: 'Details of Peaky Blinders'
  },
  {
    id: 5,
    image: '/images/sacredgames.jpg',
    imageBg: '/images/sacredgames.jpg',
    title: 'Sacred Games',
    info: 'Details of the sacred games'
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.jpg',
    imageBg: '/images/nobodyspeak.jpg',
    title: 'Nobody Speak: Trials of the free passes',
    info: 'Details of the event'
  },
  {
    id: 2,
    image: '/images/thevikings.jpg',
    imageBg: '/images/thevikings.jpg',
    title: 'The Vikings',
    info: 'Details of the event'
  },
  {
    id: 3,
    image: '/images/westside.jpg',
    imageBg: '/images/westside.jpg',
    title: 'Westside',
    info: 'Details of the event'
  },
  {
    id: 4,
    image: '/images/alteredcarbon.jpg',
    imageBg: '/images/alteredcarbon.jpg',
    title: 'Altered Carbon',
    info: 'Details of the event'
  },
  {
    id: 5,
    image: '/images/moneyheist.jpg',
    imageBg: '/images/moneyheist.jpg',
    title: 'Money Heist',
    info: 'Details of the event'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Tug Of War',
    info: 'Details of the event'
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.jpg',
    imageBg: '/images/pumpingiron.jpg',
    title: 'Pumping Iron',
    info: 'Details of the event'
  },
  {
    id: 2,
    image: '/images/suits.jpg',
    imageBg: '/images/suits.jpg',
    title: 'Suits',
    info: 'Details of the event'
  },
  {
    id: 3,
    image: '/images/talesbylight.jpg',
    imageBg: '/images/talesbylight.jpg',
    title: 'Tales By Light',
    info: 'Details of the event'
  },
  {
    id: 4,
    // image: '/images/slide4.jpg',
    // imageBg: '/images/slide4b.webp',
    title: 'Futsal',
    info: 'Details of the event'
  },
  {
    id: 5,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Control Cricket',
    info: 'Details of the event'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Badminton',
    info: 'Details of the event'
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.jpg',
    imageBg: '/images/brahmannaman.jpg',
    title: 'Brahman Naman',
    info: 'Details of the event'
  },
  {
    id: 2,
    image: '/images/glowup.jpg',
    imageBg: '/images/glowup.jpg',
    title: 'Glow Up',
    info: 'Details of the event'
  },
  {
    id: 3,
    image: '/images/americanmeme.jpg',
    imageBg: '/images/americanmeme.jpg',
    title: 'American Name',
    info: 'Details of the event'
  },
  {
    id: 4,
    // image: '/images/slide4.jpg',
    // imageBg: '/images/slide4b.webp',
    title: 'Table Tennis',
    info: 'Details of the event'
  },
  {
    id: 5,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'PUBG',
    info: 'Details of the event'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'FIFA',
    info: 'Details of the event'
  },
  {
    id: 7,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Carrom',
    info: 'Details of the event'
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />

        <h2>Elite</h2>
        <Slider>
          {elite.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Premium</h2>
        <Slider>
          {premium.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Standard</h2>
        <Slider>
          {standard.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <h2>Basic</h2>
        <Slider>
          {basic.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>

        <Footer />
      </div>
    );
  }
}

export default App;
