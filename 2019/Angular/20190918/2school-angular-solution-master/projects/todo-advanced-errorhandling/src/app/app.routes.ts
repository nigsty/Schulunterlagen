import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoAdvancedErrorhandlingModule),
    data: { title: 'Advanced Errorhandling' }
  }
];
