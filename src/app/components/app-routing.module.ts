import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AdherantsComponent } from './adherants/adherants.component';
import { ReserverComponent } from './reserver/reserver.component';
import { AjouterTerrainComponent } from './ajouter-terrain/ajouter-terrain.component';
import { AjouterAdherantComponent } from './ajouter-adherant/ajouter-adherant.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'terrain', component: TerrainComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'reservations' , component : ReservationsComponent } ,
    { path: 'adherants' , component:AdherantsComponent },
    { path: 'reserver' , component:ReserverComponent } ,
    { path: 'ajouterTerrain' , component : AjouterTerrainComponent } , 
    { path: 'ajouterAdherant' , component : AjouterAdherantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
