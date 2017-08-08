import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  public control: FormControl;

  constructor() {
    this.control = new FormControl('Initial value');
  }

  ngOnInit() {
    this.control.valueChanges.subscribe(value => console.log('value changes', value));
    this.control.registerOnChange(() => console.log('control value changed!'));
  }

  public logValue(): void {
    console.log(this.control.value);
  }

  public setControlValue(value?): void {
    this.control.setValue(value || 'New value', { onlySelf: false, emitEvent: false, emitModelToViewChange: false });
  }

}
