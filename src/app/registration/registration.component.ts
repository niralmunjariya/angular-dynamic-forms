import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phones: new FormArray([new FormControl()]),
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        zip: new FormControl()
      })
    });
  }

  ngOnInit() {
    this.registrationForm.valueChanges.subscribe(value => console.log(value));
    this.setPartialValue();
  }

  public logValue(): void {
    // console.log(this.registrationForm.getRawValue());
  }

  // set value of form group
  public setValue(): void {
    this.registrationForm.setValue({
      username: 'niral',
      email: 'niralmunjariya@gmail.com',
      password: 'abc1234'
    });
  }


  // patchValue is used to set some of the fields from the group
  public setPartialValue(): void {
    this.registrationForm.patchValue({
      username: 'niral',
      email: 'niralmunjariya@gmail.com'
    });
  }

}
