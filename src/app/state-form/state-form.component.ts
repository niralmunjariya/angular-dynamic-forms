import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css']
})
export class StateFormComponent implements OnInit {

  public stateForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.stateForm = formBuilder.group({
      firstControl: [null, Validators.required],
      secondControl: [null, Validators.required]
    });
  }

  get firstControl(): FormControl {
    return <FormControl>this.stateForm.get('firstControl');
  }

  get secondControl(): FormControl {
    return <FormControl>this.stateForm.get('secondControl');
  }

  public setStatus(): void {
    this.firstControl.markAsTouched({ onlySelf: true });
    this.secondControl.markAsTouched();
  }

  ngOnInit() {
  }

}
