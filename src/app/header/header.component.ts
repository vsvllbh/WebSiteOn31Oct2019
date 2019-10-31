import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger, ThemePalette} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  @Input()
  color: ThemePalette;


  constructor() {

  }




}
