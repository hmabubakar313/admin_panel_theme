from django.contrib import admin

# Register your models here.

from .models import Task,Student
admin.site.register(Task)
admin.site.register(Student)