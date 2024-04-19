// themes.js

import RainBackground from '../assets/Rain.jpg';
import RainMusic from '../assets/Rain.mp3';
import ForestBackground from '../assets/Forest.jpg';
import ForestMusic from '../assets/Forest.mp3';
import CosmosBackground from '../assets/Cosmos.jpg';
import CosmosMusic from '../assets/Cosmos.mp3';
import Defaultimg from '../assets/default.jpg';

const themes = [
  {
    name: 'Theme 1',
    backgroundImage: Defaultimg,
    music: null,
  },
  {
    name: 'Theme 2',
    backgroundImage: RainBackground,
    music: RainMusic,
  },
  {
    name: 'Theme 3',
    backgroundImage: ForestBackground,
    music: ForestMusic,
  },
  {
    name: 'Theme 4',
    backgroundImage: CosmosBackground,
    music: CosmosMusic,
  },

];

export default themes;
