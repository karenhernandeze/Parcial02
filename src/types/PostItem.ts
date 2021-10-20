import User from "./User";

export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  userData?: User;
}
