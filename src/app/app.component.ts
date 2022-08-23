import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

const config = {
  apiKey: '',
  databaseURL: '',
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    Pusher.logToConsole = true;

    const pusher = new Pusher('25291c0752d6089a660c',{
      cluster: 'ev'
    });

}
}

function next(next: any, arg1: () => string) {
  throw new Error('Function not implemented.');
}

