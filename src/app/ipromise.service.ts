import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IpromiseService {

  private API = 'https://ipromisesolutions.com/api_folder/';

  constructor(private http: HttpClient, private router: Router) { }


  ContactFrm(
    name: string,
    email: string,
    phone_number: string,
    msg_subject: string,
    message: string
  ): Observable<any> {
    const url = this.API + 'create_new_whatsapp.php';
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("msg_subject", msg_subject);
    formData.append("message", message);

    return this.http.post<any>(url, formData);
  }

  ContactFrm2(
    name: string,
    phone_number: string
  ): Observable<any> {
    const url = this.API + 'create_new_whatsapp.php';
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone_number", phone_number);

    return this.http.post<any>(url, formData);
  }
}
