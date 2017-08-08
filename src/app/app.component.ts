import { ControlConfig } from './control-config';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public buttonGroup: FormControl;
  public formConfig: ControlConfig[];
  public formValue: any;

  constructor() {
    this.buttonGroup = new FormControl('medium');
    this.formConfig = [{
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Type username'
    }, {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Type password'
    }];
  }

  public submitForm(value: any) {
    this.formValue = value;
    console.log('dynamic form submitted', this.formValue);
  }

  ngOnInit(): void {
    this.buttonGroup.valueChanges.subscribe(value => console.log(value));
  }
}
