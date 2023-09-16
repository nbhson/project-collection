export interface Message {
  _id: string;
  content: string;
  date: number;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
