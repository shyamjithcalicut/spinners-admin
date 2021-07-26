import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSpinnerService } from '@nebular/theme';
import { AuthenticationService } from 'app/_auth/authentication.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  returnUrl: string

  constructor(
    private spinner$: NbSpinnerService,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.spinner$.load();

    this.returnUrl = '/pages/dashboard';
  };

  login(){
    this.authService.login(this.model).subscribe(response =>{
      this.router.navigate([this.returnUrl]);
      this.loggedIn = true;
    }, error =>{
      console.log(error);
    });
  }

  logout(){
    this.loggedIn = false;
  }

}
