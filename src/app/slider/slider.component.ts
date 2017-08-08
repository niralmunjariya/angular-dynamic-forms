import { SliderRangeDirective } from './../slider-range.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Component, OnInit, forwardRef, Input } from '@angular/core';

const SLIDER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SliderComponent),
  multi: true
};

const SLIDER_CONTROL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => SliderComponent),
  multi: true
};

@Component({
  selector: 'app-slider',
  providers: [SLIDER_CONTROL_ACCESSOR],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, ControlValueAccessor {

  public value: number;
  public disabled: boolean;
  public onChange: Function;
  public onTouched: Function;
  @Input() min: string;
  @Input() max: string;

  constructor() {
    this.onChange = (_: any) => { };
    this.onTouched = () => { };
  }

  public updateValue(value: number): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  ngOnInit() {
  }

  // ControlValueAccessor method implementation
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Commented because this component is using sliderRange directive for validation
  // Validator method implementation
  // validate(c: AbstractControl): { [key: string]: any; } {
  //   const min = Number(this.min), max = Number(this.max);
  //   const error = {
  //     inRange: false,
  //     value: c.value,
  //     min: min,
  //     max: max
  //   };
  //   return (c.value >= min && c.value <= max) ? null : error;
  // }

}
