from django.shortcuts import render
from rest_framework import generics,permissions
from .models import Project,Certification,Skill
from .serializers import ProjectSerializer,CertificationSerializer,SkillSerializer
from rest_framework.viewsets import ModelViewSet

class ProjectListCreateView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

class CertificationListCreateView(ModelViewSet):
    queryset=Certification.objects.all()
    serializer_class=CertificationSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    

class SkillListCreateView(ModelViewSet):
    queryset=Skill.objects.all()
    serializer_class=SkillSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    


