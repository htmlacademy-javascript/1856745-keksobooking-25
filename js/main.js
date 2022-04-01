// import './form.js';
import {offers} from './data.js';
import {showCard} from './card.js';
import {
  enableActiveState,
  enableInactiveState
} from './form.js';


// console.log(offers);
showCard(offers[9]);
enableInactiveState();
enableActiveState();
