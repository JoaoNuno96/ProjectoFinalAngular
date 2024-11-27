import { Lista } from "./lista";

export interface Perfil
{
  id? : string;
  name : string;
  email : string;
  password : string;
  avatar : string;
  lists : Array<Lista>;
}
