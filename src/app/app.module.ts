import { Inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { DieoverInputComponent } from './dieover-input/dieover-input.component';
import { DieoverButtonComponent } from './dieover-button/dieover-button.component';

const COMPONENTS = [
  DieoverInputComponent,
  DieoverButtonComponent
];

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
})
export class AppModule {

  constructor(@Inject(Injector) private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [DieoverInputComponent, 'dieover-input'],
      [DieoverButtonComponent, 'dieover-button'],
    ];

    for(const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

}
