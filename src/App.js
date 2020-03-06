import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors/Sponsors'
import Location from './components/Location/Location'

const elite = [
  {
    id: 1,
    image: '/images/thecrown.jpg',
    imageBg: '/images/thecrown.jpg',
    title: 'The Crown',
    infoT: 'Mr and Ms Happenings',
    info: ['Mr and Ms Happenings 2020', 'lmao', 'more lmao']
  },
  {
    id: 2,
    image: '/images/thewalkingdead.jpg',
    imageBg: '/images/thewalkingdead.jpg',
    title: 'The Walking Dead',
    infoT:'Fashion show',
    info: ['Fashion show']
  },
  {
    id: 3,
    image: '/images/rhtymflow.jpg',
    imageBg: '/images/rhtymflow.jpg',
    title: 'Rhythm + Flow',
    infoT:'Battle of Bands',
    info: ['Battle of Bands']
  },
  {
    id: 4,
    image: '/images/peakyblinders.jpg',
    imageBg: '/images/peakyblinders.jpg',
    title: 'Peaky Blinders',
    infoT:'Group Dance',
    info: ['Group Dance']
  },
  {
    id: 5,
    image: '/images/sacredgames.jpg',
    imageBg: '/images/sacredgames.jpg',
    title: 'Sacred Games',
    infoT:'3rd Degree',
    info: ['3rd Degree']
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.jpg',
    imageBg: '/images/nobodyspeak.jpg',
    title: 'Nobody Speak: Trials of the free passes',
    infoT:'Street Play',
    info: ['Street Play']
  },
  {
    id: 2,
    image: '/images/thevikings.jpg',
    imageBg: '/images/thevikings.jpg',
    title: 'The Vikings',
    infoT:'Entry Parade',
    info: ['Entry Parade']
  },
  {
    id: 3,
    image: '/images/westside.jpg',
    imageBg: '/images/westside.jpg',
    title: 'Westside',
    infoT:'Duet Singing',
    info: ['Duet Singing']
  },
  {
    id: 4,
    image: '/images/alteredcarbon.jpg',
    imageBg: '/images/alteredcarbon.jpg',
    title: 'Altered Carbon',
    infoT:'Faceoff',
    info: ['Faceoff']
  },
  {
    id: 5,
    image: '/images/moneyheist.jpg',
    imageBg: '/images/moneyheist.jpg',
    title: 'Money Heist',
    infoT:'Treasure Hunt',
    info: ['Treasure Hunt']
  },
  {
    id: 6,
    image: '/images/tugofwar.jpg',
    imageBg: '/images/tugofwar.jpg',
    title: 'Tug Of War',
    infoT:'Tug of War',
    info: ['Odha ekmekank LMAO']
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.jpg',
    imageBg: '/images/pumpingiron.jpg',
    title: 'Pumping Iron',
    infoT:'Bodybuilding',
    info: ['Bodybuilding']
  },
  {
    id: 2,
    image: '/images/suits.jpg',
    imageBg: '/images/suits.jpg',
    title: 'Suits',
    infoT:'Debate',
    info: ['Debate']
  },
  {
    id: 3,
    image: '/images/talesbylight.jpg',
    imageBg: '/images/talesbylight.jpg',
    title: 'Tales By Light',
    infoT:'Photography',
    info: ['Photography']
  },
  {
    id: 4,
    image: '/images/futsal.jpg',
    imageBg: '/images/futsal.jpg',
    title: 'Futsal',
    infoT:'Futsal',
    info: ['Futsal']
  },
  {
    id: 5,
    image: '/images/controlcricket.jpg',
    imageBg: '/images/controlcricket.jpg',
    title: 'Control Cricket',
    infoT:'Cricket Khelat',
    info: ['Cricket Khelat']
  },
  {
    id: 6,
    image: '/images/badminton.jpg',
    imageBg: '/images/badminton.jpg',
    title: 'Badminton',
    infoT:'Bad min ton',
    info: ['Bad min ton']
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.jpg',
    imageBg: '/images/brahmannaman.jpg',
    title: 'Brahman Naman',
    infoT:'Quiz',
    info: ['Quiz']
  },
  {
    id: 2,
    image: '/images/glowup.jpg',
    imageBg: '/images/glowup.jpg',
    title: 'Glow Up',
    infoT:'Face Painting',
    info: ['Face Painting']
  },
  {
    id: 3,
    image: '/images/americanmeme.jpg',
    imageBg: '/images/americanmeme.jpg',
    title: 'American Name',
    infoT: 'Meme',
    info: ['Meme']
  },
  {
    id: 4,
    image: '/images/tabletennis.jpg',
    imageBg: '/images/tabletennis.jpg',
    title: 'Table Tennis',
    infoT:'Tennis Table',
    info: ['Tennis Table']
  },
  {
    id: 5,
    image: '/images/pubg.jpg',
    imageBg: '/images/pubg.jpg',
    title: 'PUBG',
    infoT:'Enemies Ahead',
    info: ['Enemies Ahead']
  },
  {
    id: 6,
    image: '/images/fifa.jpg',
    imageBg: '/images/fifa.jpg',
    title: 'FIFA',
    infoT:'Details of the event',
    info: ['Details of the event']
  },
  {
    id: 7,
    image: '/images/carrom.jpg',
    imageBg: '/images/carrom.jpg',
    title: 'Carrom',
    infoT:'Guliyo',
    info: ['Guliyo']
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

        <h2>Getting Around</h2>

        <Location />

        <Footer />
      </div>
    );
  }
}

export default App;
