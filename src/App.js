import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'

const elite = [
  {
    id: 1,
    image: '/images/thecrown.png',
    imageBg: '/images/thecrown.png',
    title: 'The Crown',
  },
  {
    id: 2,
    image: '/images/thewalkingdead.png',
    imageBg: '/images/thewalkingdead.png',
    title: 'The Walking Dead'
  },
  {
    id: 3,
    image: '/images/rhtymflow.png',
    imageBg: '/images/rhtymflow.png',
    title: 'Rhythm + Flow',
  },
  {
    id: 4,
    image: '/images/peakyblinders.png',
    imageBg: '/images/peakyblinders.png',
    title: 'Peaky Blinders'
  },
  {
    id: 5,
    image: '/images/sacredgames.png',
    imageBg: '/images/sacredgames.png',
    title: 'Sacred Games'
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.png',
    imageBg: '/images/nobodyspeak.png',
    title: 'Nobody Speak: Trials of the free passes'
  },
  {
    id: 2,
    image: '/images/thevikings.png',
    imageBg: '/images/thevikings.png',
    title: 'The Vikings'
  },
  {
    id: 3,
    image: '/images/westside.png',
    imageBg: '/images/westside.png',
    title: 'Westside',
  },
  {
    id: 4,
    image: '/images/alteredcarbon.png',
    imageBg: '/images/alteredcarbon.png',
    title: 'Altered Carbon'
  },
  {
    id: 5,
    image: '/images/moneyheist.png',
    imageBg: '/images/moneyheist.png',
    title: 'Money Heist'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Tug Of War'
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.png',
    imageBg: '/images/pumpingiron.png',
    title: 'Pumping Iron'
  },
  {
    id: 2,
    image: '/images/suits.png',
    imageBg: '/images/suits.png',
    title: 'Suits'
  },
  {
    id: 3,
    image: '/images/talesbylight.png',
    imageBg: '/images/talesbylight.png',
    title: 'Tales By Light',
  },
  {
    id: 4,
    // image: '/images/slide4.jpg',
    // imageBg: '/images/slide4b.webp',
    title: 'Futsal'
  },
  {
    id: 5,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Control Cricket'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Badminton'
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.png',
    imageBg: '/images/brahmannaman.png',
    title: 'Brahman Naman'
  },
  {
    id: 2,
    image: '/images/glowup.png',
    imageBg: '/images/glowup.png',
    title: 'Glow Up'
  },
  {
    id: 3,
    image: '/images/americanmeme.png',
    imageBg: '/images/americanmeme.png',
    title: 'American Name',
  },
  {
    id: 4,
    // image: '/images/slide4.jpg',
    // imageBg: '/images/slide4b.webp',
    title: 'Table Tennis'
  },
  {
    id: 5,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'PUBG'
  },
  {
    id: 6,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'FIFA'
  },
  {
    id: 7,
    // image: '/images/slide5.jpg',
    // imageBg: '/images/slide5b.webp',
    title: 'Carrom'
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
