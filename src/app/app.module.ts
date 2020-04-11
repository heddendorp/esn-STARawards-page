import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnersPageComponent } from './winners-page/winners-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountdownComponent } from './about-page/countdown/countdown.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StarsBackgroundComponent } from './winners-page/stars-background/stars-background.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AboutPageComponent },
  { path: 'winners', component: WinnersPageComponent },
];

const materialModules = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [
    AppComponent,
    WinnersPageComponent,
    AboutPageComponent,
    CountdownComponent,
    StarsBackgroundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
