import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LogingService } from "src/app/globals/services/loging.service";
import { AuthService } from "src/app/gobals/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials:Credentiasl = {
    email:'',
    password:''
  };

  constructor(
    private LogServ: LogingService, 
    private _snackBar: MatSnackBar,
    private auth:AuthService,
    private router:Router
    )
     { }

  ngOnInit(): void {
  }

  login(e){
    console.log(this.credentials);
    this.LogServ.login(this.credentials).then(response=>{
      console.log('response loging: ',response);
      this._snackBar.open('login: ', 'Dance', {
        duration: 2000,
      });
      this.auth.save(response.token);
      this.router.navigate(['/']);
    }).catch(
      (err)=>{
        console.log('error login: ', err);
        this._snackBar.open('error login: ', 'Dance', {
          duration: 2000,
        });
      }
    );
  }

}

interface Credentiasl{
  email:string;
  password:string;
}