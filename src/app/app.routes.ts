import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { JoinComponent } from './main-content/projects/join/join.component';
import { GameComponent } from './main-content/projects/game/game.component';
import { PokedexComponent } from './main-content/projects/pokedex/pokedex.component';
import { PolicyComponent } from './main-content/policy/policy.component';
import { ImpressumComponent } from './main-content/impressum/impressum.component';
import { DaBubbleComponent } from './main-content/projects/da-bubble/da-bubble.component';

export const routes: Routes = [
     {path:"", component: MainContentComponent},
     {path:'join', component: JoinComponent},
     {path:'game', component: GameComponent},
     {path:'pokedex', component: PokedexComponent},
     {path:'da-bubble', component: DaBubbleComponent},
     { path: 'policy', component: PolicyComponent},
     { path: 'impressum', component: ImpressumComponent}
     
];
