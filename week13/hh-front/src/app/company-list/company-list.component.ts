import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(public companyService: CompanyService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    const companyObservable = this.companyService.getCompanyList()
    companyObservable.subscribe(companies => this.companies = companies)
  }

}
