import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      },
      {
        path: 'students',
        loadChildren: () => import('./students/student.module').then(m => m.StudentModule),
      }
    ]
  }
];

export const AppRouting = RouterModule.forRoot(routes);
