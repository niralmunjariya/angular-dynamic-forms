import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input()
  public group: FormGroup;
  @Output() public delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public onDelete(): void {
    this.delete.emit();
  }

}
