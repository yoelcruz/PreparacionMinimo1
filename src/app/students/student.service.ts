import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  getByStudies(studies: string[]): Observable<Student[]>{
    console.log('studies', studies);
    return this.http.get<Student[]>(`http://localhost:3800/students/?studies=${studies.join(',')}`);

  }
}
