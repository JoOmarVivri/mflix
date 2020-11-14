import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/gobals/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  islogged:Boolean;

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.islogged = this.auth.isLogged();
    this.auth.loginstatus.subscribe(status=>{
      this.islogged = status;
    });
    console.log(this.islogged);
    
  }

  logout(){
    this.auth.clear();
    this.router.navigate(['/login']);
  }

}
