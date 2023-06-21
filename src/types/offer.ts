export type Rooms = {
  id: number;
  name: string;
  type: string;
  mark: string;
  price: number;
};

export type Offers = {
  listName: string;
  rooms: Rooms[];
};
