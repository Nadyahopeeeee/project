// import {QuestionGenre} from '../types/question';

// export const questions: QuestionGenre[] = [
//   {
//     type: 'genre',
//     genre: 'rock',
//     answers: [{
//       src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
//       genre: 'rock',
//     }, {
//       src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
//       genre: 'blues',
//     }, {
//       src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
//       genre: 'jazz',
//     }, {
//       src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
//       genre: 'rock',
//     }],
//   },
// ];

import {Offers} from '../types/offer';

export const offers: Offers[] = [
  {
    listName: 'list',
    rooms: [{
      id: '1',
      name: 'Beautiful &amp; luxurious apartment at great location',
      type: 'Apartment',
      mark: 'Not premium',
      price: '120',
    }, {
      id: '2',
      name: 'Canal View Prinsengracht',
      type: 'Apartment',
      mark: 'Premium',
      price: '132',
    }, {
      id: '3',
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
      mark: 'Premium',
      price: '140',
    }, {
      id: '4',
      name: 'Wood and stone place 2',
      type: 'Private room',
      mark: 'Not premium',
      price: '150',
    }],
  },
];
