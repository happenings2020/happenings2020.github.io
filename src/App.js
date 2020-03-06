import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors/Sponsors'


const elite = [
  {
    id: 1,
    image: '/images/thecrown.jpg',
    imageBg: '/images/thecrown.jpg',
    title: 'The Crown',
    info: 'Mr and Ms Happenings 2020'
  },
  {
    id: 2,
    image: '/images/thewalkingdead.jpg',
    imageBg: '/images/thewalkingdead.jpg',
    title: 'The Walking Dead',
    info: 'Fashion show'
  },
  {
    id: 3,
    image: '/images/rhtymflow.jpg',
    imageBg: '/images/rhtymflow.jpg',
    title: 'Rhythm + Flow',
    info: 'Battle of Bands'
  },
  {
    id: 4,
    image: '/images/peakyblinders.jpg',
    imageBg: '/images/peakyblinders.jpg',
    title: 'Peaky Blinders',
    info: 'Group Dance'
  },
  {
    id: 5,
    image: '/images/sacredgames.jpg',
    imageBg: '/images/sacredgames.jpg',
    title: 'Sacred Games',
    info: '3rd Degree'
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.jpg',
    imageBg: '/images/nobodyspeak.jpg',
    title: 'Nobody Speak: Trials of the free passes',
    info: 'Street Play'
  },
  {
    id: 2,
    image: '/images/thevikings.jpg',
    imageBg: '/images/thevikings.jpg',
    title: 'The Vikings',
    info: 'Entry Parade'
  },
  {
    id: 3,
    image: '/images/westside.jpg',
    imageBg: '/images/westside.jpg',
    title: 'Westside',
    info: 'Duet Singing'
  },
  {
    id: 4,
    image: '/images/alteredcarbon.jpg',
    imageBg: '/images/alteredcarbon.jpg',
    title: 'Altered Carbon',
    info: 'Faceoff'
  },
  {
    id: 5,
    image: '/images/moneyheist.jpg',
    imageBg: '/images/moneyheist.jpg',
    title: 'Money Heist',
    info: 'Treasure Hunt'
  },
  {
    id: 6,
    image: '/images/tugofwar.jpg',
    imageBg: '/images/tugofwar.jpg',
    title: 'Tug Of War',
    info: 'Odha ekmekank LMAO'
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.jpg',
    imageBg: '/images/pumpingiron.jpg',
    title: 'Pumping Iron',
    info: 'Bodybuilding'
  },
  {
    id: 2,
    image: '/images/suits.jpg',
    imageBg: '/images/suits.jpg',
    title: 'Suits',
    info: 'Debate'
  },
  {
    id: 3,
    image: '/images/talesbylight.jpg',
    imageBg: '/images/talesbylight.jpg',
    title: 'Tales By Light',
    info: 'Photography'
  },
  {
    id: 4,
    image: '/images/futsal.jpg',
    imageBg: '/images/futsal.jpg',
    title: 'Futsal',
    info: 'Futsal'
  },
  {
    id: 5,
    image: '/images/controlcricket.jpg',
    imageBg: '/images/controlcricket.jpg',
    title: 'Control Cricket',
    info: 'Cricket Khelat'
  },
  {
    id: 6,
    image: '/images/badminton.jpg',
    imageBg: '/images/badminton.jpg',
    title: 'Badminton',
    info: 'Bad min ton'
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.jpg',
    imageBg: '/images/brahmannaman.jpg',
    title: 'Brahman Naman',
    info: 'Quiz'
  },
  {
    id: 2,
    image: '/images/glowup.jpg',
    imageBg: '/images/glowup.jpg',
    title: 'Glow Up',
    info: 'Face Painting'
  },
  {
    id: 3,
    image: '/images/americanmeme.jpg',
    imageBg: '/images/americanmeme.jpg',
    title: 'American Name',
    info: 'Meme'
  },
  {
    id: 4,
    image: '/images/tabletennis.jpg',
    imageBg: '/images/tabletennis.jpg',
    title: 'Table Tennis',
    info: 'Tennis Table'
  },
  {
    id: 5,
    image: '/images/pubg.jpg',
    imageBg: '/images/pubg.jpg',
    title: 'PUBG',
    info: 'Enemies Ahead'
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
    image: '/images/carrom.jpg',
    imageBg: '/images/carrom.jpg',
    title: 'Carrom',
    info: 'Guliyo'
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

        <Sponsors />

        

        <Footer />
      </div>
    );
  }
}

export default App;
