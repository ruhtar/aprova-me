import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss'],
  standalone: true,providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule]
})
export class CronogramaComponent {
  selected!: Date | null;
  cronograma = [
    { titulo: 'Estudo de Português', descricao: 'Revisar gramática e fazer exercícios.', data: new Date() },
    { titulo: 'Matemática Básica', descricao: 'Resolver questões de álgebra e geometria.', data: new Date() },
    { titulo: 'História', descricao: 'Ler sobre o período colonial.', data: new Date() },
  ];
}
