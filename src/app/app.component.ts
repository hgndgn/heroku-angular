import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as env from 'env-var';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Heroku-Deployment-App Last update today :)';
  username = env.get('USERNAME');
  
  ngOnInit() {
    console.log(this.username);
  }

  
}
