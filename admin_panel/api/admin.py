from django.contrib import admin

# Register your models here.

from .models import Task,Student,Teacher,School,Classroom,Admin_Dept
admin.site.register(Task)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(School)
admin.site.register(Classroom)
admin.site.register(Admin_Dept)