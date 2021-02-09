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
      { path: '', redirectTo: '/index', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((m) => m.IndexModule),
      },

    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: '**',
        redirectTo: '/auth/404',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
