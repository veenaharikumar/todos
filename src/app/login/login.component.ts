import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'veenah'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="veenah" && this.password==="1"){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin =  false
    }else{
      this.invalidLogin =  true
    }
  }

}
