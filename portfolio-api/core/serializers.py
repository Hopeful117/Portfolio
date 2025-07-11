from rest_framework import serializers
from .models import Project,Certification,Skill

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model= Certification
        fields= '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model= Skill
        fields='__all__'