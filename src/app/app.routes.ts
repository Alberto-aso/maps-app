import { Routes } from '@angular/router';
import { FullscreenMapPageComponent } from './pages/fullscreen-map-page/fullscreen-map-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

export const routes: Routes = [
    {path: 'fullscreen', component: FullscreenMapPageComponent, title: 'FullScreen Map'},
    {path: 'markers', component: MarketPageComponent, title: 'Markers'},
    {path: 'houses', component: HousesPageComponent, title: 'Home - properties'},
    {path: '**', redirectTo: 'fullscreen'},
];
