#  admin_panel
from django.contrib import admin
from django.urls import path
from django.urls import include
from .import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('dashboard/',views.index,name='dashboard'),
    path('signup/',views.signup,name='signup'),
    path('save/',views.save,name='save'),
    path('login/',views.login,name='login'),
    path('login_user/',views.login_user,name='login_user'),
    path('form/',views.form,name='form'),
    path('logout_view/',views.logout_view,name='logout_view'),
    path('table/',views.table,name='table'),
    path('insert/',views.insert,name='insert'),
    
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
