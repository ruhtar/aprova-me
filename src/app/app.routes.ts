import { Routes } from '@angular/router';
import { CronogramaComponent } from './cronograma/cronograma.component';

export const routes: Routes = [
    { path: 'cronograma', component: CronogramaComponent }, // Rota para o cronograma
    { path: '', redirectTo: '/cronograma', pathMatch: 'full' } // Redireciona para cronograma ao carregar
  ];
