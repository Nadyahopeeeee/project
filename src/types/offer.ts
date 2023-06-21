export type Rooms = {
  id: string;
  name: string;
  type: string;
  mark: string;
  price: string;
};

export type Offers = {
  listName: string;
  rooms: Rooms[];
};
