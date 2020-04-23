import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from './models';
// import { COMPANY_LIST } from 'company'

@Injectable({
    providedIn: 'root'
})

export class CompanyService{

    constructor(private http: HttpClient) {}

    getCompanyList(): Observable<Company[]> {
        return this.http.get<Company[]>('http://localhost:8000/api/companies/');
    }

    getCompany(id: number): Observable<Company> {
        return this.http.get<Company>('http://localhost:8000/api/companies/' + id);
    }
}
