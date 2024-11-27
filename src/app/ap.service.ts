import { Injectable } from '@angular/core';
import { Perfil } from './models/perfil';
import { Jogo } from './models/jogo';
import { JogoDetalhes } from './models/jogosDetalhes';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Lista } from './models/lista';


@Injectable({
  providedIn: 'root'
})
export class ApService {

  public listaPerfis : Array<Perfil> = [];
  public listaJogos : Array<Jogo> = [];
  public listaJogosDetails : Array<Jogo> = [];

  public lista : Lista =
  {
    id : "",
    name : "",
    gamesIds : Array<string>()
  }

  public perfil : Perfil = {
    id : "",
    name : "",
    email : "",
    password : "",
    avatar : "",
    lists : Array<Lista>()
  }

  constructor(private http : HttpClient){}

  getPerfis() : Observable<Perfil>{

    return this.http.get<Perfil>("http://localhost:3000/profile");
  }

  getJogoUnico(id : string) : Observable<JogoDetalhes>{
    return this.http.get<JogoDetalhes>(`http://localhost:3000/gameDetails/${id}`);
  }

  getJogoUnicoSemDetalhes(id : string) : Observable<Jogo>{
    return this.http.get<Jogo>(`http://localhost:3000/gamesList/${id}`);
  }

  getJogos() : Observable<Jogo[]>{
    return this.http.get<Jogo[]>("http://localhost:3000/gamesList");
  }

  createPerfil(perf : Perfil)
  {
    return this.http.put<Perfil>(`http://localhost:3000/profile/`,perf);
  }

  editPerfil(perf : Perfil)
  {
    return this.http.put<Perfil>(`http://localhost:3000/profile/`,perf);
  }

  createJogo(jog : Jogo)
  {
    this.listaJogos.push(jog);
  }

}

