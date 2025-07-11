from django.db import models


from adminsortable2.admin import SortableAdminMixin


# Create your models here.
class Project(models.Model):
    categorie=models.CharField(max_length=255)
    preview=models.ImageField(upload_to='project_images/', blank=True, null=True) 
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=255)
    github_link = models.URLField(blank=True, null=True)
    demo_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    position = models.PositiveIntegerField(default=0)

    
    
    class Meta:
        ordering = ['position']
    
class Certification(models.Model):
    title=models.CharField(max_length=255)
    description = models.TextField()
    preview=models.ImageField(upload_to='certification_images/', blank=True, null=True)
    link= models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    position = models.PositiveIntegerField(default=0)

    
    class Meta:
        ordering = ['position']
    
class Skill(models.Model):
    language=models.CharField(max_length=255)
    level=models.IntegerField(default=1)
    icone=models.ImageField(upload_to='skill_images/', blank=True, null=True)
    position = models.PositiveIntegerField(default=0)


    class Meta:
        ordering = ['position']