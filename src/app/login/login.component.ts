import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: null,
      password: [null, [
        Validators.required,
        Validators.maxLength(6)
      ]]
    });
  }

  get username(): FormControl {
    return <FormControl>this.loginForm.get('username');
  }

  get password(): FormControl {
    return <FormControl>this.loginForm.get('password');
  }

  public login(): void {
    console.log(this.loginForm.value);
  }

  ngOnInit() {
  }

}
