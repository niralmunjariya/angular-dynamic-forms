import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-6',
  templateUrl: './chapter6.component.html',
  styleUrls: ['./chapter6.component.css']
})
export class Chapter6Component implements OnInit {

  public slider: FormControl;
  constructor() {
    this.slider = new FormControl(0);
  }

  ngOnInit() {
  }

}
