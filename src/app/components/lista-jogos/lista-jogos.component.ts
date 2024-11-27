import { Component } from '@angular/core';
import { Jogo } from '../../models/jogo';
import { ApService } from '../../ap.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink,RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [HttpClientModule, RouterLink, RouterModule, SearchBarComponent,FormsModule],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  searchTitle : string = "";
  searchGenre : string = "";
  searchPlatform : string = "";

  listaGames : Array<Jogo> = [];
  listGenre : Array<string> = [];
  listPlatform : Array<string> = [];

  constructor(private ap: ApService){
  }

  ngOnInit(){
    this.ap.getJogos().subscribe({
      next: (data) => {

        var title = this.searchTitle;
        var genre = this.searchGenre;
        var platform = this.searchPlatform;

        //RECOVER GENRE AND PLATFORM OF ALL GAMES AND STORE THEM
        this.recoverFilterFromGames("Genre",data);
        this.recoverFilterFromGames("Platform",data);

        if(title == "" && genre == "" && platform == "")
        {
          this.listaGames = data;
        }
        else
        {
          if(title != "")
          {
            let gamesFiltered = this.listaGames.filter(function(d){ return d.title == title});
            this.listaGames = gamesFiltered;
          }

          if(genre != "")
          {
            let gamesFiltered = this.listaGames.filter(function(d){ return d.genre == genre});
            this.listaGames = gamesFiltered;
          }

          if(platform != "")
          {
            let gamesFiltered = this.listaGames.filter(function(d){ return d.platform == platform});
            this.listaGames = gamesFiltered;
          }

          if(title != "" && genre != "" && platform != "")
          {
            this.searchTitle = "";
            this.searchGenre = "";
            this.searchPlatform = "";
            this.ngOnInit();
          }
        }

      },
      error: (erro) =>{
        console.error("Algo deu errado:", erro);
      }
    });
  }

  updateResearchValue(valueReceived : string)
  {
    this.searchTitle = valueReceived;
    this.ngOnInit();
  }

  verifyFilters()
  {
    this.ngOnInit();
  }

  recoverFilterFromGames(index : string,listaGamesParams : Array<Jogo>)
  {
    if(index == "Genre")
    {
      for(var i in listaGamesParams)
        {
          if(listaGamesParams[i].genre != "")
          {
            if(this.listGenre.indexOf(listaGamesParams[i].genre) == -1)
              {
                this.listGenre.push(listaGamesParams[i].genre);
              }
          }
          else
          {
            continue;
          }

        }
    }
    else if(index == "Platform")
    {
      for(var i in listaGamesParams)
        {
          if(listaGamesParams[i].platform != "")
          {
            if(this.listPlatform.indexOf(listaGamesParams[i].platform) == -1)
              {
                this.listPlatform.push(listaGamesParams[i].platform);
              }
          }
          else
          {
            continue;
          }

        }
    }
    else
    {

    }
  }



}
