from django.shortcuts import render
from rest_framework import generics,permissions
from .models import Project,Certification,Skill
from .serializers import ProjectSerializer,CertificationSerializer,SkillSerializer

class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

class CertificationListCreateView(generics.ListCreateAPIView):
    queryset=Certification.objects.all()
    serializer_class=CertificationSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    

class SkillListCreateView(generics.ListCreateAPIView):
    queryset=Skill.objects.all()
    serializer_class=SkillSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE','POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]