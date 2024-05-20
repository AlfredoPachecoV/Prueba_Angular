import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //inyectar en angular desde la version 16
  private http = inject(HttpClient);

  list(){
    return this.http.get('https://localhost:8085/contacts');
  }

  get(id:number){
    return this.http.get('https://localhost:8085/contacts/${id}');
  }

  create(contact: any){
    return this.http.get('https://localhost:8085/contacts',contact);
  }
  update(id:number, contact: any){
    return this.http.get('https://localhost:8085/contacts/${id}',contact);
  }

  delete(id:number){
    return this.http.get('https://localhost:8085/contacts/${id}');
  }
}
