import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  email : string ='';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
