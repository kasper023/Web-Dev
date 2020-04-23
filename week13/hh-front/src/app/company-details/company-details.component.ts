import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../models';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;

  constructor(public companyService: CompanyService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    const id = +this.route.snapshot.paramMap.get('companyId');
    // this.companyService.getCompany(id).subscribe(company => this.company = company);
    const companyObservable = this.companyService.getCompany(id)
    companyObservable.subscribe(company => this.company = company)
  }

}
