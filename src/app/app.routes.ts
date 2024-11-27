import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPerfisComponent } from './components/lista-perfis/lista-perfis.component';
import { ListaJogosComponent } from './components/lista-jogos/lista-jogos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleGameDetailsComponent } from './components/single-game-details/single-game-details.component';
import { GamelistUsersComponent } from './components/gamelist-users/gamelist-users.component';


export const routes: Routes = [
  {
    title: "Home",
    path: "home",
    component: HomeComponent
  },
  {
    title: "Lista de Perfis",
    path: "listaPerfis",
    component: ListaPerfisComponent

  },
  {
    title: "Lista de Jogos",
    path: "listaJogos",
    component: ListaJogosComponent

  },
  {
    title: "Detalhes Jogo",
    path: "jogo/:id",
    component: SingleGameDetailsComponent

  },
  {
    title: "Game List",
    path: "gamelistuser/:id",
    component: GamelistUsersComponent
  },
  {
    title: "User Profile",
    path: "user/profile",
    component: DashboardComponent

  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  // {
  //   path: "**",

  // }
];
