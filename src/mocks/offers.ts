import {Offers} from '../types/offer';

export const offers: Offers[] = [
  {
    listName: 'list',
    rooms: [{
      id: 1,
      name: 'Beautiful luxurious apartment at great location',
      type: 'Apartment',
      mark: 'Not premium',
      price: 120,
    }, {
      id: 2,
      name: 'Canal View Prinsengracht',
      type: 'Apartment',
      mark: 'Premium',
      price: 132,
    }, {
      id: 3,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
      mark: 'Premium',
      price: 140,
    }, {
      id: 4,
      name: 'Wood and stone place 2',
      type: 'Private room',
      mark: 'Not premium',
      price: 150,
    }, {
      id: 5,
      name: 'Wood place 3',
      type: 'Apartment',
      mark: 'Premium',
      price: 160,
    }],
  },
];
