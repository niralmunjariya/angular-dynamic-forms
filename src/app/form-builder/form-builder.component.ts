import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor(builder: FormBuilder) {
    this.registrationForm = builder.group({
      username: null,
      email: null,
      password: null,
      address: builder.group({
        street: null,
        city: null,
        zip: null
      }),
      phones: builder.array([builder.control(null)])
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
