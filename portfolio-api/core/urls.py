from django.urls import path
from .views import ProjectListCreateView,CertificationListCreateView,SkillListCreateView
from rest_framework.routers import DefaultRouter
from django.urls import path,include

router = DefaultRouter()
router.register(r'projets',ProjectListCreateView)
router.register(r'certifications',CertificationListCreateView)
router.register(r'skills',SkillListCreateView)

urlpatterns = [
    path('', include(router.urls)),
  
   
]
