import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './adapters/custom-date-adapter';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }]
};
