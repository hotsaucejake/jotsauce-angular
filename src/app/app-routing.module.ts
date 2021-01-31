import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthenticationGuard } from './core/authentication/authentication.guard';

export const Approutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: () =>
          import('./starter/starter.module').then((m) => m.StarterModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: '**',
        redirectTo: '/authentication/404',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/authentication/login',
  },
];
