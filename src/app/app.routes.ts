import { Route } from '@angular/router';

// lazy-load standalone component
export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./support/support.component').then((mod) => mod.SupportComponent),
  },
  {
    path:'contact',
    loadComponent:()=> 
    import('./contact/contact.component').then((mod)=> mod.ContactComponent)
  }
];
