from django.contrib import admin
from .models import Project,Certification,Skill
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin


# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin,SortableAdminMixin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'technologies')
    ordering = ('-created_at',)

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="80" style="border-radius: 6px;" />', obj.image.url)
        return "-"
    preview.short_description = "Image"



@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin,SortableAdminMixin):
    list_display = ('title', 'created_at')
    search_fields = ('title','created_at')
    ordering = ('-created_at',)

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="80" style="border-radius: 6px;" />', obj.image.url)
        return "-"
    preview.short_description = "Image"


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin,SortableAdminMixin):
    list_display = ('language', 'level')
    search_fields = ('language','level')
