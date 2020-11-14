export interface Movie {
  id?:Number;
  title:string;
  duration:Number;
  description:string;
  poster?:string;
  plot:string;
  imdb:IMDB;
  rated:string;
  awards:Awards;
}

interface IMDB {
  rating:number;
  votes:number;
  id:number
}

interface Awards{
  wins:number;
  nominations:string;
  text:string;
}
