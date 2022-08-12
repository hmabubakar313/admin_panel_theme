#  admin_panel
from django.contrib import admin
from django.urls import path
from django.urls import include
from .import views
from django.conf.urls.static import static
from . import views
from django.conf import settings
urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/',views.index,name='dashboard'),
    path('signup/',views.signup,name='signup'),
    path('save/',views.save,name='save'),
    path('login/',views.login,name='login'),
    # path('login_user/',views.login_user,name='login_user'),
    path('form/',views.form,name='form'),
    path('logout_view/',views.logout_view,name='logout_view'),
    path('table/',views.table,name='table'),
    path('insert/',views.insert,name='insert'),
    path('student/',views.student,name='student'),
    path('teacher/',views.teacher,name='teacher'),
    path('school/',views.school,name='school'),
    path('classroom/',views.classroom,name='classroom'),
    path('staff/',views.staff,name='staff'),
    path('user/',views.user,name='user'),
    
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
