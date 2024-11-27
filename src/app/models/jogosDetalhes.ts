import { minimumSystemRequirements } from "./minimumSystemRequirements";
import { screenshot } from "./screenshot";

export interface JogoDetalhes
{
  id? : string;
  title : string;
  thumbnail : string;
  status : string;
  shortDescription : string;
  description : string;
  gameUrl: string;
  genre : string;
  platform : string;
  publisher : string;
  developer : string;
  releaseDate : string;
  freetogameProfileUrl : string;
  minimumSystemRequirements : minimumSystemRequirements;
  screenshots : Array<screenshot>;
}

