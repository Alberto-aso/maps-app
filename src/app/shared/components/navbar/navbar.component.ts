import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';

import { routes } from '../../../app.routes';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  router = inject(Router);

  routes = routes.map(route => ({ // Get the routes from app.routes
    path: route.path,
    title: `${route.title ?? 'Maps in Angular'}`
  })).filter(route => route.path != '**');

  // Set like observable
  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd), // Filter by type
    tap((event) => console.log(event)), // Send to console the result
    map((event) => event.url),
    map(
      (url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Maps'
    )
  );

  // Set like signal
  pageTitle = toSignal(this.router.events.pipe(
    filter(event => event instanceof NavigationEnd), // Filter by type
    tap((event) => console.log(event)), // Send to console the result
    map((event) => event.url),
    map(
      (url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Maps'
    )
  ));

}
