import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AppRoutingModule } from './components/app-routing.module';
import { TerrainComponent } from './components/terrain/terrain.component';
import { AdherantsComponent } from './components/adherants/adherants.component';
import { ReserverComponent } from './components/reserver/reserver.component';
import { AjouterTerrainComponent } from './components/ajouter-terrain/ajouter-terrain.component';
import { AjouterAdherantComponent } from './components/ajouter-adherant/ajouter-adherant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TerrainComponent,
    ReservationsComponent ,
    AdherantsComponent,
    ReserverComponent,
    AjouterTerrainComponent,
    AjouterAdherantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
