import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors/Sponsors'
import Location from './components/Location/Location'
import BottomNav from './components/BottomNav/BottomNav'

const elite = [
  {
    id: 1,
    image: '/images/thecrown.webp',
    imageBg: '/images/thecrown.webp',
    title: 'The Crown',
    infoT: 'Mr and Ms Happenings',
    info: ['Rules:-', '➢ One Team of 1 Male and 1 Female per college.',
     '➢ 1st round: Task round follwed by Elimination', '➢ 2nd round: Intro and Talent round',
    '➢ 3rd round: Q&A round', '➢ Only one helper will be allowed for setup']
  },
  {
    id: 2,
    image: '/images/thewalkingdead.webp',
    imageBg: '/images/thewalkingdead.webp',
    title: 'The Walking Dead',
    infoT:'Fashion show',
    info: ['Rules:-', '➢ One crew of 2 Models, 2 Helpers, 1 Narrator per college',
    '➢ Duration: 10-15 mins including setup time', '➢ Themes: ', 'Round 1: Horror tales of Netflix',
    '  Round 2: Open Theme', '➢ Use of sand, dust, water, fire or ash not allowed' ]
  },
  {
    id: 3,
    image: '/images/rhtymflow.webp',
    imageBg: '/images/rhtymflow.webp',
    title: 'Rhythm + Flow',
    infoT:'Battle of Bands',
    info: ['Rules:-', '➢ Number of Participants: 3-8 and atleast 3 on stage at any given performance', 
    '➢Time limit: 15 min including setup and sound check','➢ Songs of any genre and language are permitted.',
    '➢ Pre-recorded loops and backing tracks are not permitted.', '➢ Only a basic drum kit, 4 vocal mics and 4 input jacks will be provided',
    '➢ Original compositions will be eligible for bonus points.', '➢ 4 copies of the lyrics are to be submitted to the coordinators.']
  },
  {
    id: 4,
    image: '/images/peakyblinders.webp',
    imageBg: '/images/peakyblinders.webp',
    title: 'Peaky Blinders',
    infoT:'Group Dance',
    info: ['Rules:-', '➢ Open Theme', '➢ Duration: 4-7 minutes', '➢ Number of participants: 8-10', '➢ Use of any one prop is a must', 
    '➢ No use of fire, glitter, sand, ash and water', '➢ No solo act will be allowed during performance',
    '➢ Music should be submitted to the coordinator during registration.']
  },
  {
    id: 5,
    image: '/images/sacredgames.webp',
    imageBg: '/images/sacredgames.webp',
    title: 'Sacred Games',
    infoT:'3rd Degree',
    info: ['Rules:-', '➢ The participant must sign a consent form before the event begins.', '➢ One participant per college.',
    'Day 1: Physical strength and tactics (Off stage)', 'Day 2: Mental strength and wittiness (On stage)', '➢ Get extra clothes and umbrella (Bunty is waiting!)']
  }
];

const premium = [
  {
    id: 1,
    image: '/images/nobodyspeak.webp',
    imageBg: '/images/nobodyspeak.webp',
    title: 'Nobody Speak: Trials of the free passes',
    infoT:'Street Play',
    info: ['Rules:-', '➢ 1  team per college.', '➢ Duration:10 to 12 min', '➢ Participants : Minimum 8 & Maximum 12',
    '➢ Maximum 4 props are allowed (excluding dupatta)', '➢ Languages allowed: Konkani, Marathi, Hindi, or English.',
    '➢ Going below or beyond time limit will lead to DEDUCTION of marks.', 'Topics :', "1. Mhadei - Goa's lost lifeline ?",
    '2.कोंकणी मायभास , काय फक्त राज्यभास?', '3. Meme - a global expression?', '4.शेणील्लें भुरगेंपण', '5.Melting World : an invisible threat',
    '6.Armchair protests : Social media के शेर public में ढेर']
  },
  {
    id: 2,
    image: '/images/thevikings.webp',
    imageBg: '/images/thevikings.webp',
    title: 'The Vikings',
    infoT:'Entry Parade',
    info: ['Rules:-', '➢ Minimum 10 participants (10 free entries rest paid entries )', '➢ Duration 10-12 minutes ',
    '➢ Negative marking incase of exceeding time', '➢ No form of pre recorded audios or videos allowed', '➢ Props allowed']
    
  },
  {
    id: 3,
    image: '/images/westside.webp',
    imageBg: '/images/westside.webp',
    title: 'Westside',
    infoT:'Duet Singing',
    info: ['Rules:-', '➢ Team of 2 participants per college.', '➢ Duration: 7-8 minutes including setup time.', 
    '➢ Languages allowed: Konkani, Marathi, Hindi, English.', '➢ Languages other than these four is allowed only for a brief moment not more than 30 seconds.',
    '➢ The karaoke track must be submitted to the coordinators during registration.', '➢ File format is mp3/wav',
    '➢ Karaoke track must not feature any vocals(verbals)', '➢ Any background choir or voices in the track will be allowed only after it is checked by coordinators.',
    '➢ Fusion of songs is allowed ', '➢ Self composition is allowed ', '➢ Participants can play their own instruments . No accompaniment allowed. ' ]
  },
  {
    id: 4,
    image: '/images/alteredcarbon.webp',
    imageBg: '/images/alteredcarbon.webp',
    title: 'Altered Carbon',
    infoT:'Faceoff',
    info: ['Rules:-', '➢ Event consists of 3 segments (Dance, Drop the mic, Beat it), each a 1v1 faceoff.', 
    '➢ 3 distinct participants are expected in each category, 1 for each segment.', '➢ A draw of lots decides which college goes against whom.',
    '➢ Dance:', 'Dancer will get a max of 60 seconds to present their dance on the song being played.', 'Songs will be chosen on random basis.',
    'A participant and their opponent presents dance on the same song.', '➢ Beat Box:', 'Performer gets a max of 90 secs to perform their beats.',
    'Performance should be strictly without use of any support instrument.', '➢ Drop the mic: ', 'Will consist of two rounds of 120s each.', 
    'Any kind of abuse on religious, social or political agendas will lead to disqualification.', 'All arguments should be directed only towards the opponent or his/her college.']
  },
  {
    id: 5,
    image: '/images/moneyheist.webp',
    imageBg: '/images/moneyheist.webp',
    title: 'Money Heist',
    infoT:'Treasure Hunt',
    info: ['Rules:-', '➢ One team of 1 boy and 1 girl per college.', '➢ The participants will be undergoing multiple qualifiers round.', 
    '➢ The participants have to qualify each round by cracking the clues physically or mentally depending on the task.', '➢ Each team should have their own 2-wheeler.',
    '➢ Both participants should have helmets, license and follow all the traffic rules.', '➢ Other rules will be exlained on the spot.']
  },
  {
    id: 6,
    image: '/images/tugofwar.webp',
    imageBg: '/images/tugofwar.webp',
    title: 'Tug Of War',
    infoT:'Tug of War',
    info: ['Rules:-', '➢ Participants must compulsorily wear sports attire.', '➢ One anchor allowed.', '➢ No gloves allowed.',
    '➢ Number of participants:- 7(4 boys+3 girls)', '➢ 1 substitute']
  }
];

const standard = [
  {
    id: 1,
    image: '/images/pumpingiron.webp',
    imageBg: '/images/pumpingiron.webp',
    title: 'Pumping Iron',
    infoT:'Bodybuilding',
    info: ['Rules:-', '➢ One athlete from each college.', '➢ Posing trunk is mandatory.', '➢ Athlete must use the body tan cream.', 
    '➢ Athletes must get ready 10 mins prior to competition.', '➢ 1st Round: Each person has to pose all 7 compulsory poses individually as an introductory round.',
    '➢ 2nd Round: Comparison round', '➢ 3rd Round: A one minimum music posing', '➢ 4th Round: Comparison of top 5 athletes.']
  },
  {
    id: 2,
    image: '/images/suits.webp',
    imageBg: '/images/suits.webp',
    title: 'Suits',
    infoT:'Debate',
    info: ['Rules:-', '➢ No of participants per college: 2', '➢ Theme: Suits (Netflix TV Series)', '➢ Preliminary round topics would be based on concepts from Suits.', '➢ Round 1: Oxford style debate',
    '(1st speaker for the motion- 1st speaker against the motion- 2nd speaker for the motion- 2nd speaker against thr motion: each speaks for 2 mins.', 
    '➢ Round 2:', 'Topic:-The new age internet TV apps like Netflix lack a censor as opposed to conventional cable TV – is censorship of content necessary? ', 
    'Each team gets 5 minutes to express their views. One rebuttal question by the opposing team Followed by questions by judges.', 'Participants should contact the coordinators as soon as possible', 
    'Content, Logic and Retort would serve as parameters for judgement ', 'se of profanity or insults would cause disqualification.', 'Organizing committee holds the right to change the format at their discretion.']
  },
  {
    id: 3,
    image: '/images/talesbylight.webp',
    imageBg: '/images/talesbylight.webp',
    title: 'Tales By Light',
    infoT:'Photography',
    info: ['Rules:-', ' ➢ One participant per college.',
    '➢ Photos to be clicked on DSLR only.',
    '➢ Editing is not allowed .',
    '➢ Themes will be given on the spot.',
    '➢ One theme will be given on each day at the registration desk @11 am. ',
    '➢ Photos should be submitted sharply at 5 PM on 14th March 2020, that is on second day.',
    '➢ Participants are requested to submit 2 photographs in JPEG format.',
    '➢ Photograph should be clicked on that day only',
    '➢ Caption should be provided along with the photo. Caption should be self composed.',
    '➢ Violation of the above rules will lead to disqualification.',
    '➢ Judging will be based on  uniqueness, creativity, composition and caption.'
    ]
  },
  {
    id: 4,
    image: '/images/futsal.webp',
    imageBg: '/images/futsal.webp',
    title: 'Futsal',
    infoT:'Futsal',
    info: ['Rules:-', '➢ 5- a side tournament with 2 additional substitutes.', '➢ Rolling subs allowed', '➢ 2 playing halves of 7 minutes each...',
     '➢ On completion of playing time if the game ends in a draw each team will be awarded 3 penalties each.', '➢ Failure to decide a winner in these 3 kicks will lead to sudden death of 5 additional kicks from each team.', 
    '➢ If this too results in a tie, the toss of a coin will decide the winner of the match.', '➢ In an extreme case of multiple injuries to the players on a team, minimum 3 players should be playing.', 
    '➢ Any queries and additional information should be acquired from the undersigned coordinating team.']
  },
  {
    id: 5,
    image: '/images/controlcricket.webp',
    imageBg: '/images/controlcricket.webp',
    title: 'Control Cricket',
    infoT:'Control Cricket',
    info: ['Rules:-', '➢ One team per college', '➢  players + 1 substitute', '➢ 1 girl compulsory', '➢ Umpires decision will be final. Unnecessary arguments will lead to disqualification.', 
    '➢ Specific rules will be explained on the spot.', '➢ Participant are requested to be present at the venue by 9:30 am.']
  },
  {
    id: 6,
    image: '/images/badminton.webp',
    imageBg: '/images/badminton.webp',
    title: 'Badminton',
    infoT:'Badminton',
    info: ['Rules:-', '➢ The team should comprise of 4 players( 1 girl compulsory).', '➢ Every round will have 2 singles and 1 doubles matches.', "Match 1 - Men's singles", 
    "Match 2 - Women's singles", "Match 3 – Men’s Doubles ", '➢ Only 1 player can play 2 matches (1 singles, 1 doubles).', '➢ The knockout round matches will have 1 set of 15 points.', 
    '➢ The semi-final will have 1 set of 21 points', '➢ The final will have 3 sets of 15 points each.', '➢ No deuce in any of  matches - the first person to reach the maximum points will be the winner of the set.', 
    '➢ Badminton shoes or non marking shoes are compulsory.']
  }
];

const basic = [
  {
    id: 1,
    image: '/images/brahmannaman.webp',
    imageBg: '/images/brahmannaman.webp',
    title: 'Brahman Naman',
    infoT:'Quiz',
    info: ['Rules:-', '➢ A preliminary round will be held first', 
    '➢ Top 4 teams from the prelims will make it to the final stage round',
    '➢ Upto 2 teams per college allowed. But only the highest scoring team from that particular college in the prelims will make it to the stage round.', '➢ Each team should comprise of 2 members.',
    '➢ Rest of the rules will be explained at the venue by the coordinators ']
  },
  {
    id: 2,
    image: '/images/glowup.webp',
    imageBg: '/images/glowup.webp',
    title: 'Glow Up',
    infoT:'Face Painting',
    info: ['Rules:-', '➢ A preliminary round will be held first', '➢ Top 4 teams from the prelims will make it to the final stage round', 
    '➢ Upto 2 teams per college allowed. But only the highest scoring team from that particular college in the prelims will make it to the stage round.',
    '➢ Each team should comprise of 2 members.', '➢ Rest of the rules will be explained at the venue by the coordinators']
  },
  {
    id: 3,
    image: '/images/americanmeme.webp',
    imageBg: '/images/americanmeme.webp',
    title: 'American Name',
    infoT: 'Meme',
    info: ['Rules:-', '➢ 2 memes per college', '➢ Template Netflix', '➢ POTUS visit to India', '➢ No restrictions.', '➢ No videos or gifs can be used.',
    '➢ Both the memes should be sent on or before 11th March 2020 by 12 PM at mi2kawlekar@gmail.com. ', '➢ Best meme will be featured on maiche_kazar Instagram page.']
  },
  {
    id: 4,
    image: '/images/tabletennis.webp',
    imageBg: '/images/tabletennis.webp',
    title: 'Table Tennis',
    infoT:'Table Tennis',
    info:['Rules:-', '➢ he team should comprise of 5 people (3 players + 2 substitutes) and should include both boys and girls', '➢ Every round will have 3 singles matches.', 
    "Match 1 - Men's singles", "Match 2 - Women's singles",'Match 3 - Singles match (This match can be played by either a boy or a girl )', 
    '➢ 3 different players for each match (Only 1 match per player).', '➢All the matches including knockouts , semifinals and finals will have 3 sets, 11 points each.', 
    '➢ No deduce in any of matches- the first person to reach the 11th point of a set is the winner of that set.']
  },
  {
    id: 5,
    image: '/images/pubg.webp',
    imageBg: '/images/pubg.webp',
    title: 'PUBG',
    infoT:'Enemies Ahead',
    info: ['Rules:-', '➢ Total of 3 maps to be played', '➢ Erangle Tpp', '➢ Miramar Tpp', '➢ Erangle Fpp', 
    '', 'Scoring system as follows: ', '❖ 1st- 20 points',
    '❖ 2nd -14', '❖ 3rd-10', '❖ 4th-8', '❖ 5th-7', '❖ 6th-6', '❖ 7th-5', '❖ 8th-4', '❖ 9th-3', '❖ 10th-2', '❖ 11th-16th-1', 
    '➢ 1 point per kill', '➢ Emulators/iPads not allowed', '➢ Any kind of cheating will result in immediate disqualification', '➢ Decision of the coordinators will be final']
  },
  {
    id: 6,
    image: '/images/fifa.webp',
    imageBg: '/images/fifa.webp',
    title: 'FIFA',
    infoT:'FIFA',
    info: ['Rules:-', '➢ 1 participant per college.',
    '➢ Half length: 5 minutes',
    '➢ In case of a tie: Extra time & penalty shootout.', '➢ Legacy defending is not allowed.',
    '➢ Game speed: Normal.',
    '➢ Only club teams are allowed.']
  },
  {
    id: 7,
    image: '/images/carrom.webp',
    imageBg: '/images/carrom.webp',
    title: 'Carrom',
    infoT:'Carrom',
    info: ['Rules:-','➢ No of teams 1(1 girl+ 1 boy)', 
    '➢ Game of 3 boards per set.',
    '➢ 3 set match,',
    '➢ Rest all rules will be told on the spot.']
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />

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

        <Sponsors />

        <h2>Getting Around</h2>

        <Location />

        <Footer />

        <BottomNav />
      </div>
    );
  }
}

export default App;
