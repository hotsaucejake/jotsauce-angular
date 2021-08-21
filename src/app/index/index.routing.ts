import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { JotCreateComponent } from './jots/jot-create/jot-create.component';
import { JotsComponent } from './jots/jots.component';
import { JottingComponent } from './jotting/jotting.component';

export const IndexRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: IndexComponent,
        data: {
          title: 'Index',
        }
      },
      {
        path: 'jots',
        component: JotsComponent,
        data: {
          title: 'Jots',
        }
      },
      {
        path: 'jots/:slug',
        component: JottingComponent,
        data: {
          title: 'Jotting',
          urls: [
            { title: 'Jots', url: '/jots' },
            { title: 'Jotting' }
          ]
        },
      },
      {
        path: 'jot-create',
        component: JotCreateComponent,
        data: {
          title: 'Create Jot',
          urls: [
            { title: 'Jots', url: '/jots' },
            { title: 'Create Jot' }
          ]
        },
      }
    ]
  }
];
