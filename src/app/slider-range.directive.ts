import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, forwardRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sliderRange]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SliderRangeDirective),
      multi: true
    }
  ]
})
export class SliderRangeDirective implements Validator {

  @Input() sliderRange: number[];
  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    const min = this.sliderRange[0], max = this.sliderRange[1];
    const error = {
      inRange: false,
      value: c.value,
      min: min,
      max: max
    };
    return (c.value >= min && c.value <= max) ? null : error;
  }

}
