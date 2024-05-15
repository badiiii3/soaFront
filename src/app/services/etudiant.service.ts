import { Injectable } from '@angular/core';
import { Etudiant } from '../model/Etudiant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:9090/api/etudiants';

  public getUserDetails(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.baseUrl+"/all");
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${userId}`);
  }

  public updateUser(user: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/update/${user.id}`, user);
  }
}
