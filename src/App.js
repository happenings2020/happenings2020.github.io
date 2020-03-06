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
    info: ['Rules:-', '# One Team of 1 Male and 1 Female per college.',
     '# 1st round: Task round follwed by Elimination', '# 2nd round: Intro and Talent round',
    '# 3rd round: Q&A round', '# Only one helper will be allowed for setup']
  },
  {
    id: 2,
    image: '/images/thewalkingdead.jpg',
    imageBg: '/images/thewalkingdead.jpg',
    title: 'The Walking Dead',
    infoT:'Fashion show',
    info: ['Rules:-', '# One crew of 2 Models, 2 Helpers, 1 Narrator per college',
    '# Duration: 10-15 mins including setup time', '# Themes: ', 'Round 1: Horror tales of Netflix', '  Round 2: Open Theme', '# Use of sand, dust, water, fire or ash not allowed' ]
  },
  {
    id: 3,
    image: '/images/rhtymflow.jpg',
    imageBg: '/images/rhtymflow.jpg',
    title: 'Rhythm + Flow',
    infoT:'Battle of Bands',
    info: ['Rules:-',]
  },
  {
    id: 4,
    image: '/images/peakyblinders.jpg',
    imageBg: '/images/peakyblinders.jpg',
    title: 'Peaky Blinders',
    infoT:'Group Dance',
    info: ['Rules:-',]
  },
  {
    id: 5,
    image: '/images/sacredgames.jpg',
    imageBg: '/images/sacredgames.jpg',
    title: 'Sacred Games',
    infoT:'3rd Degree',
    info: ['Rules:-',]
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.jpg',
    imageBg: '/images/nobodyspeak.jpg',
    title: 'Nobody Speak: Trials of the free passes',
    infoT:'Street Play',
    info: ['Rules:-',]
  },
  {
    id: 2,
    image: '/images/thevikings.jpg',
    imageBg: '/images/thevikings.jpg',
    title: 'The Vikings',
    infoT:'Entry Parade',
    info: ['Rules:-',]
  },
  {
    id: 3,
    image: '/images/westside.jpg',
    imageBg: '/images/westside.jpg',
    title: 'Westside',
    infoT:'Duet Singing',
    info: ['Rules:-',]
  },
  {
    id: 4,
    image: '/images/alteredcarbon.jpg',
    imageBg: '/images/alteredcarbon.jpg',
    title: 'Altered Carbon',
    infoT:'Faceoff',
    info: ['Rules:-',]
  },
  {
    id: 5,
    image: '/images/moneyheist.jpg',
    imageBg: '/images/moneyheist.jpg',
    title: 'Money Heist',
    infoT:'Treasure Hunt',
    info: ['Rules:-',]
  },
  {
    id: 6,
    image: '/images/tugofwar.jpg',
    imageBg: '/images/tugofwar.jpg',
    title: 'Tug Of War',
    infoT:'Tug of War',
    info: ['Rules:-',]
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.jpg',
    imageBg: '/images/pumpingiron.jpg',
    title: 'Pumping Iron',
    infoT:'Bodybuilding',
    info: ['Rules:-',]
  },
  {
    id: 2,
    image: '/images/suits.jpg',
    imageBg: '/images/suits.jpg',
    title: 'Suits',
    infoT:'Debate',
    info: ['Rules:-',]
  },
  {
    id: 3,
    image: '/images/talesbylight.jpg',
    imageBg: '/images/talesbylight.jpg',
    title: 'Tales By Light',
    infoT:'Photography',
    info: ['Rules:-',]
  },
  {
    id: 4,
    image: '/images/futsal.jpg',
    imageBg: '/images/futsal.jpg',
    title: 'Futsal',
    infoT:'Futsal',
    info: ['Rules:-',]
  },
  {
    id: 5,
    image: '/images/controlcricket.jpg',
    imageBg: '/images/controlcricket.jpg',
    title: 'Control Cricket',
    infoT:'Cricket Khelat',
    info: ['Rules:-',]
  },
  {
    id: 6,
    image: '/images/badminton.jpg',
    imageBg: '/images/badminton.jpg',
    title: 'Badminton',
    infoT:'Bad min ton',
    info: ['Rules:-',]
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.jpg',
    imageBg: '/images/brahmannaman.jpg',
    title: 'Brahman Naman',
    infoT:'Quiz',
    info: ['Rules:-',]
  },
  {
    id: 2,
    image: '/images/glowup.jpg',
    imageBg: '/images/glowup.jpg',
    title: 'Glow Up',
    infoT:'Face Painting',
    info: ['Rules:-',]
  },
  {
    id: 3,
    image: '/images/americanmeme.jpg',
    imageBg: '/images/americanmeme.jpg',
    title: 'American Name',
    infoT: 'Meme',
    info: ['Rules:-',]
  },
  {
    id: 4,
    image: '/images/tabletennis.jpg',
    imageBg: '/images/tabletennis.jpg',
    title: 'Table Tennis',
    infoT:'Tennis Table',
    info:['Rules:-',]
  },
  {
    id: 5,
    image: '/images/pubg.jpg',
    imageBg: '/images/pubg.jpg',
    title: 'PUBG',
    infoT:'Enemies Ahead',
    info: ['Rules:-',]
  },
  {
    id: 6,
    image: '/images/fifa.jpg',
    imageBg: '/images/fifa.jpg',
    title: 'FIFA',
    infoT:'Details of the event',
    info: ['Rules:-',]
  },
  {
    id: 7,
    image: '/images/carrom.jpg',
    imageBg: '/images/carrom.jpg',
    title: 'Carrom',
    infoT:'Guliyo',
    info: ['Rules:-',]
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
