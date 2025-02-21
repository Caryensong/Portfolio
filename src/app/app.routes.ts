import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { JoinComponent } from './main-content/projects/join/join.component';
import { GameComponent } from './main-content/projects/game/game.component';
import { PokedexComponent } from './main-content/projects/pokedex/pokedex.component';

export const routes: Routes = [
     {path:"", component: MainContentComponent},
     {path:'join', component: JoinComponent},
     {path:'game', component: GameComponent},
     {path:'pokedex', component: PokedexComponent}
     

];
