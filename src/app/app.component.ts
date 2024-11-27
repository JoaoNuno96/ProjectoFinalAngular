import { RouterOutlet,RouterLink, RouterLinkActive,RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { Perfil } from './models/perfil';
import { ApService } from './ap.service';
import { Jogo } from './models/jogo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GameWebsite';


}
