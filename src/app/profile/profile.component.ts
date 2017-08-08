import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  private formBuilder: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: null,
      email: null,
      experience: this.formBuilder.array([])
    });
  }

  get experience(): FormArray {
    return <FormArray>this.profileForm.get('experience');
  }

  private createExperienceGroup(): FormGroup {
    return this.formBuilder.group({
      title: [null, Validators.required],
      company: null,
      description: null
    });
  }

  public addExperience(): void {
    this.experience.push(this.createExperienceGroup());
  }

  public onDeleteExperience(index: number): void {
    this.experience.removeAt(index);
  }

  public saveProfile(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.getRawValue());
    }
  }

}
