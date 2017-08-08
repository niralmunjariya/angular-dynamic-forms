import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { StateFormComponent } from './state-form/state-form.component';
import { LoginComponent } from './login/login.component';
import { ValidatorComponent } from './validator/validator.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { SliderComponent } from './slider/slider.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { SliderRangeDirective } from './slider-range.directive';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { FormRendererComponent } from './form-renderer/form-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    RegistrationComponent,
    FormBuilderComponent,
    StateFormComponent,
    LoginComponent,
    ValidatorComponent,
    ExperienceComponent,
    ProfileComponent,
    CustomControlComponent,
    SliderComponent,
    Chapter6Component,
    SliderRangeDirective,
    DynamicControlComponent,
    FormRendererComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    SliderRangeDirective
  ],
  providers: [],
  entryComponents: [DynamicControlComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
