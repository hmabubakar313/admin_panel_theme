"""rest_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from django.urls import include




urlpatterns = [
    path('task/', views.apiOverview, name='api-overview'),
    path('task-list/', views.tasklist, name='task-list'),
    path('task-detail/<str:pk>/',views.taskdetail,name='task-detail'),
    path('create-task/',views.createtask,name='create-task'),
    path('update-task/<str:pk>/',views.updatetask,name='update-task'),
    path('delete-task/<str:pk>/',views.deletetask,name='delete-task'),
    path('studentapiOverview',views.studentapiOverview,name='studentapiOverview'),
    path('student-list/',views.student_list,name='student-list'),
    path('student-detail/<str:pk>/',views.student_detail,name='student-detail'),
    path('create-student/',views.create_student,name='create-student'),
    path('update-student/<str:pk>/',views.update_student,name='update-student'),
    path('delete-student/<str:pk>/',views.delete_student,name='delete-student'),
    path('teacherapiOverview',views.teacherapiOverview,name='teacherapiOverview'),
    path('teacher-list/',views.teacher_list,name='teacher-list'),
    path('teacher-detail/<str:pk>/',views.teacher_detail,name='teacher-detail'),
    path('create-teacher/',views.create_teacher,name='create_teacher'),
    path('update-teacher/<str:pk>/',views.update_teacher,name='update-teacher'),
    path('delete-teacher/<str:pk>/',views.delete_teacher,name='delete-teacher'),
]
