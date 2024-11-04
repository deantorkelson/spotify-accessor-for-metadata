import { Followers } from "src/models/Followers";

export interface User {
  display_name: string;
  followers: Followers;
}
