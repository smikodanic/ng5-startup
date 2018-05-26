import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../ng/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;
  err: Error;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginFG = this.fb.group({
      username: '',
      password: ''
    });
  }


  login() {
    const creds = this.loginFG.value; // {username: , password: }

    this.authService.login(creds)
      .subscribe((v: any) => {
        console.info('LOGGED USER:: ', v);
      }, (err) => {
        this.err = err.error;
        setTimeout(() => {
          this.err = null;
        }, 2100);
        console.error('ERROR: ', err);
      });
  }

}
