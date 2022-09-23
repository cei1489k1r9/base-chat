import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchControl = new FormControl('')
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  dashboard() {
    this.auth.logout();
  }
}
