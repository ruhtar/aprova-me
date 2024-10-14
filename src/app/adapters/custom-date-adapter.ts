import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    const day = this._to2digit(date.getDate());
    const month = this._to2digit(date.getMonth() + 1); // Meses começam em 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`; // Formato dd/mm/aaaa
  }

  private _to2digit(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
}

import { InjectionToken } from '@angular/core';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY', // Formato para parsear o input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // Formato para exibir no input
    monthYearLabel: 'MMM YYYY', // Formato para mês e ano
    dateA11yLabel: 'LL', // Formato acessível
    monthYearA11yLabel: 'MMMM YYYY', // Formato acessível para mês e ano
  },
};

export const CUSTOM_DATE_FORMATS_TOKEN = new InjectionToken('CUSTOM_DATE_FORMATS');
