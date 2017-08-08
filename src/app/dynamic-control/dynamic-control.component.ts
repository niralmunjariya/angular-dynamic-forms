import { ControlConfig } from './../control-config';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent implements OnInit {

  public formGroup: FormGroup;
  public controlConfig: ControlConfig;
  constructor() { }

  ngOnInit() {
  }

}
