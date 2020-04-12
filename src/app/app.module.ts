import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnersPageComponent } from './winners-page/winners-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountdownComponent } from './components/countdown/countdown.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StarsBackgroundComponent } from './components/stars-background/stars-background.component';
import { Winners2PageComponent } from './winners2-page/winners2-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AboutPageComponent },
  { path: 'winners-draft', component: WinnersPageComponent },
  { path: 'winners-draft-2', component: Winners2PageComponent },
];

const materialModules = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [
    AppComponent,
    WinnersPageComponent,
    AboutPageComponent,
    CountdownComponent,
    StarsBackgroundComponent,
    Winners2PageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    materialModules,
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
