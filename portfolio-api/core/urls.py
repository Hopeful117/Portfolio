from django.urls import path
from .views import ProjectListCreateView,CertificationListCreateView,SkillListCreateView

urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='project-list'),
    path('certifications/',CertificationListCreateView.as_view(),name='certification-list'),
    path('skills/',SkillListCreateView.as_view(),name='skill-list')
]
