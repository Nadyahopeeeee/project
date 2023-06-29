export type Offer = {
  bedrooms: number
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  }
  description: string
  goods: string[]
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: string[]
  isFavorite: boolean
  isPremium: boolean
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

// export type Rooms = {
//   id: number;
//   name: string;
//   type: string;
//   mark: string;
//   price: number;
// };
//
// export type Offers = {
//   listName: string;
//   rooms: Rooms[];
// };
