import { async } from '@angular/core/testing';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as env from 'env-var';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dd = new Date().getDay();
  mm = new Date().getMonth();
  yy = new Date().getDate();    
}
