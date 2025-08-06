import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'milkManList',
        loadComponent: () =>
          import('../../pages/milk-man-list/milk-man-list.page').then(m => m.MilkManListPage),
      },
      {
        path: 'milkManDetails',
        loadComponent: () =>
          import('../../pages/milk-man-details/milk-man-details.page').then(m => m.MilkManDetailsPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
