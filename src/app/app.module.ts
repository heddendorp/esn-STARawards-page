import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountdownComponent } from './components/countdown/countdown.component';
import { MatButtonModule } from '@angular/material/button';
import { StarsBackgroundComponent } from './components/stars-background/stars-background.component';
import { Winners2PageComponent } from './winners2-page/winners2-page.component';
import { LaurelComponent } from './components/laurel/laurel.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CategoryResolver } from './services/category.resolver';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AboutPageComponent },
  { path: 'winners', component: Winners2PageComponent },
  {
    path: 'winners/:category',
    component: CategoryPageComponent,
    resolve: { category: CategoryResolver },
  },
];

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CountdownComponent,
    StarsBackgroundComponent,
    Winners2PageComponent,
    LaurelComponent,
    CategoryPageComponent,
  ],
  imports: [
    HttpClientModule,
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
