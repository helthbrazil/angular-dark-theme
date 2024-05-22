import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'land-page',
    loadChildren: () =>
      import('./pages/land-page/land-page.module').then(
        (m) => m.LandPageModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
