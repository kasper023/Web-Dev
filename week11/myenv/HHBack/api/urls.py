from django.urls import path, re_path
# from api.views import company_list, company_detail, vacancy_list, vacancy_detail, vacancy_from_company, vacancy_list10
from api.views import CompanyView, CompanyDetailView, VacancyView, VacancyDetailView, company_vacancies
urlpatterns = [
    path('companies/', CompanyView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),

    path('vacancies/', VacancyView.as_view()),
    path('vacancies/<int:pk>', VacancyDetailView.as_view()),

    path('companies/<int:pk>/vacancies', company_vacancies),
    # path('vacancies/top_ten', vacancy_list10)
]
