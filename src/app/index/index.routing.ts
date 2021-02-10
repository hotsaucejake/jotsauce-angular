import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { JotsComponent } from "./jots/jots.component";

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
                path: 'jots/:id',
                component: IndexComponent,
                data: {
                    title: 'Jotting',
                    urls: [
                        { title: 'Jots', url: '/jots' },
                        { title: 'Jotting' }
                    ]
                },
            }
        ]
    }
];
