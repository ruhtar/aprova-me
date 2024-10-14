import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar-details',
  standalone: true,
  imports: [],
  templateUrl: './calendar-details.component.html',
  styleUrl: './calendar-details.component.scss'
})
export class CalendarDetailsComponent {
  selectedDate: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtém a data da URL
    this.selectedDate = this.route.snapshot.paramMap.get('date');
  }
}
