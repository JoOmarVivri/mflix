import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SignupService } from "src/app/globals/services/signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:any = {};
  form:FormGroup;

  constructor(private formBuilder: FormBuilder, private singupServ: SignupService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email:['', [Validators.required,  Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]]
    },{
      validator:this.passwordsMatch
    });
  }

  signup(e){
    this.user = this.form.getRawValue();
    if( this.form.valid){
      console.log('envia', this.form.getRawValue());
      this.singupServ.signup(this.user).then(
        (res)=>{
          this.router.navigate(['/login'])
        }
      ).catch(
        (err)=>{
          console.log('error sign: ',err);
          this._snackBar.open('error sign: ', 'Dance', {
            duration: 2000,
          });
        }
      );
    }else{
      console.log('no envia');
    }
  }

  passwordsMatch(data){
    // const pass = data.controls.password.value ; 
    // const confirm = data.controls.confirm.value;

    // const valores = data.getRawValue();
    const { password, confirm } = data.getRawValue();

    if (password === confirm) {
      return null;
    }
    return {missmatch:true};
  }

}
