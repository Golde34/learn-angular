import { Component, Inject, OnInit } from '@angular/core';
import { InitService } from './init.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'learn-angular';

  constructor(@Inject(localStorageToken) private localStorage: Storage,
    private iniService: InitService) {
    console.log(iniService.config)
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Golde Hotel');
  }
}
