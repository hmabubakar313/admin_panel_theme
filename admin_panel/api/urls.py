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
    # student urls
    path('studentapiOverview',views.studentapiOverview,name='studentapiOverview'),
    path('student-list/',views.student_list,name='student-list'),
    path('student-detail/<str:pk>/',views.student_detail,name='student-detail'),
    path('create-student/',views.create_student,name='create-student'),
    path('update-student/<str:pk>/',views.update_student,name='update-student'),
    path('delete-student/<str:pk>/',views.delete_student,name='delete-student'),
    # teacher urls
    path('teacherapiOverview',views.teacherapiOverview,name='teacherapiOverview'),
    path('teacher-list/',views.teacher_list,name='teacher-list'),
    path('teacher-detail/<str:pk>/',views.teacher_detail,name='teacher-detail'),
    path('create-teacher/',views.create_teacher,name='create_teacher'),
    path('update-teacher/<str:pk>/',views.update_teacher,name='update-teacher'),
    path('delete-teacher/<str:pk>/',views.delete_teacher,name='delete-teacher'),
    # school urls
    path('schoolapiOverview',views.schoolapiOverview,name='schoolapiOverview'),
    path('school-list/',views.school_list,name='school-list'),
    path('school-detail/<str:pk>/',views.school_detail,name='school-detail'),
    path('create-school/',views.create_school,name='create_school'),
    path('update-school/<str:pk>/',views.update_school,name='update-school'),
    path('delete-school/<str:pk>/',views.delete_school,name='delete-school'),
    # classroom url
    path('classroomapiOverview',views.classroomapiOverview,name='classroomapiOverview'),
    path('classroom-list/',views.classroom_list,name='class-list'),
    path('class-detail/<str:pk>/',views.classroom_detail,name='class-detail'),
    path('create-class/',views.create_classroom,name='create-class'),
    path('update-class/<str:pk>/',views.update_classroom,name='update-classroom'),
    path('delete-class/<str:pk>/',views.delete_classroom,name='delete-classroom'),
    # admin url
    path('adminapiOverview',views.adminapiOverview,name='adminapiOverview'),
    path('admin-list/',views.admin_list,name='admin-list'),
    path('admin-detail/<str:pk>/',views.admin_detail,name='admin-detail'),
    path('create-admin/',views.create_admin,name='create-admin'),
    path('update-admin/<str:pk>/',views.update_admin,name='update-admin'),
    path('delete-admin/<str:pk>/',views.delete_admin,name='delete-admin'),
    # user url
    path('userapiOverview',views.userapiOverview,name='userapiOverview'),
    path('user-list/',views.user_list,name='user-list'),
    path('user-detail/<str:pk>/',views.user_detail,name='user-detail'),
    path('create-user/',views.create_user,name='create-user'),
    path('update-user/<str:pk>/',views.update_user,name='update-user'),
    path('delete-user/<str:pk>/',views.delete_user,name='delete-user'),
    # register url
    path('register/',views.RegisterUserAPIView.as_view(),name='register'),
    path('my-user/',views.my_user,name='my-user'),


]