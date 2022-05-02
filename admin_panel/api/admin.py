from django.contrib import admin

# Register your models here.

from .models import Task,Student,Teacher
admin.site.register(Task)
admin.site.register(Student)
admin.site.register(Teacher)