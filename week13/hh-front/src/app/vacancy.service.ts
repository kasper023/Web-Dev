import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './models';

@Injectable({
    providedIn: 'root'
})

export class VacancyService{

    constructor(private http: HttpClient) {}

    getVacancyList(id: number): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>('http://localhost:8000/api/companies/vacancies/' + id);
    }

    // getCompany(id: number): Observable<Company> {
    //     return this.http.get<Company>('http://localhost:8000/api/companies/' + id);
    // }
}
