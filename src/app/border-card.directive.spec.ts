import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const directive = new BorderCardDirective(new ElementRef(null)); // pass ElementRef instance with null as argument
    expect(directive).toBeTruthy();
  });
});
