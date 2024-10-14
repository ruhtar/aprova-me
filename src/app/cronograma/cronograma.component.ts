import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss'],
  standalone: true,providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatCardModule]
})
export class CronogramaComponent {
  selected: Date | null = null;

  constructor(private router: Router) {}

  onDateSelected(date: Date): void {
    const formattedDate = date.toISOString().split('T')[0]; // Formata a data para 'YYYY-MM-DD'
    console.log(formattedDate)
    this.router.navigate([`/details/${formattedDate}`]); // Redireciona para a rota de detalhes com a data selecionada
  }
}
