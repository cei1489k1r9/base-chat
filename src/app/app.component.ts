import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { config } from 'rxjs';
import * as firebase from 'firebase';
;
const firebaseConfig = {
  apiKey: "AIzaSyCT8SDQzRZxp7eR4uQDqnG95vDirkFt9Fg",
  authDomain: "base-chat-b0f6d.firebaseapp.com",
  databaseURL: "https://base-chat-b0f6d-default-rtdb.firebaseio.com",
  projectId: "base-chat-b0f6d",
  storageBucket: "base-chat-b0f6d.appspot.com",
  messagingSenderId: "215269003553",
  appId: "1:215269003553:web:6440c40a588b19d34c6e60",
  measurementId: "G-8EWXCXG32C"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';


constructor(){
firebase.initializeApp(config); 
}


}
