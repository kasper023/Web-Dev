import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(public vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getVacancyList();
  }

  getVacancyList() {
    const id = +this.route.snapshot.paramMap.get('companyId');
    const companyObservable = this.vacancyService.getVacancyList(id)
    companyObservable.subscribe(vacancies => this.vacancies = vacancies)
  }

}
