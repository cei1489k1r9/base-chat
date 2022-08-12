import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
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
 
    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
}


  submit(): void{
    this.http.post( URL,'http://localhost:8000/api/messages', body: {
    username: this.username,
    message: this.message }).subscribe(next:() => this.message = '');
  }
}
