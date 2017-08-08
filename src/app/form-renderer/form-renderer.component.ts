import { DynamicControlComponent } from './../dynamic-control/dynamic-control.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlConfig } from './../control-config';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent implements OnInit, OnChanges {

  @Input()
  public formConfig: ControlConfig[];

  @Output()
  public formSubmit: EventEmitter<any>;

  @ViewChild('container', { read: ViewContainerRef })
  private formContainer: ViewContainerRef;

  private cfr: ComponentFactoryResolver;
  public form: FormGroup;

  constructor(cfr: ComponentFactoryResolver) {
    this.cfr = cfr;
    this.form = new FormGroup({});
    this.formSubmit = new EventEmitter<any>();
  }

  public submitForm() {
    this.formSubmit.emit(this.form.value);
  }

  ngOnChanges(): void {
    if (this.formConfig) {
      this.formContainer.clear();
      this.formConfig.forEach(controlConfig => {
        this.form.addControl(controlConfig.name, new FormControl());
        this.buildControl(controlConfig);
      });
    }
  }

  private buildControl(controlConfig: ControlConfig): void {
    const factory = this.cfr.resolveComponentFactory(DynamicControlComponent);
    const control = this.formContainer.createComponent(factory);

    control.instance.controlConfig = controlConfig;
    control.instance.formGroup = this.form;
  }

  ngOnInit() {
  }

}
