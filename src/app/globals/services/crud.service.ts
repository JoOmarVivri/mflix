import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * env
 */
import { environment } from "src/environments/environment";
import { AuthService } from 'src/app/gobals/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint:string= '';

  constructor(
    private http: HttpClient,
    private authserv: AuthService
    ) { }

  getAll(): Promise<any> {
    const headers:HttpHeaders = new HttpHeaders(
      {
        Authorization:this.authserv.get()
      }
    );

    const url = environment.apiUrl + this.endpoint;
    return this.http.get(url,
      {headers:headers}
    ).toPromise();
  }

  getByID(id): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders(
      {
        Authorization: this.authserv.get()
      }
    );
    const url = environment.apiUrl + this.endpoint + "/" + id;
    return this.http.get(url,
      { headers: headers }
    ).toPromise();
  }
}
