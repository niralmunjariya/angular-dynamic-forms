import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './custom.validator';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  public validationForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.validationForm = formBuilder.group({
      username: [{ value: null, disabled: true }, [Validators.required, CustomValidators.between(0, 999)], CustomValidators.noDuplicate],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    const username = <FormControl>this.validationForm.get('username');
    username.registerOnDisabledChange(isDisabled => console.log('username is', isDisabled ? 'disabled' : 'enabled'));
  }

  public login(): void {
    if (this.validationForm.valid) {
      console.log(this.validationForm.getRawValue());
    }
  }

  public setErrors(): void {
    this.validationForm.setErrors({ invalidForm: true });
  }

  public toggleUsername(): void {
    const username: FormControl = <FormControl>this.validationForm.get('username');
    username.disabled ? username.enable() : username.disable();
  }

}
