import { Routes } from '@angular/router';
import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';
import { CronogramaComponent } from './cronograma/cronograma.component';

export const routes: Routes = [
    { path: 'cronograma', component: CronogramaComponent }, // Rota para o cronograma
    {path: 'details/:date', component: CalendarDetailsComponent},
    { path: '', redirectTo: '/cronograma', pathMatch: 'full' } // Redireciona para cronograma ao carregar
  ];
