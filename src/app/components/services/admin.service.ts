import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8082/admin'; 

  constructor(private http: HttpClient) {}

  login(adminData: { id: number; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, adminData);
  }

  getTerrains(): Observable<any> {
    return this.http.get(`${this.baseUrl}/terrain`);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resevation`);
  }

 getAdherents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Adherant`);
  }


  addReservation(reservation: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/addReservation`, reservation);
  }

}
