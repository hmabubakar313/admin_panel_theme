#  admin_panel
from django.contrib import admin
from django.urls import path
from django.urls import include
from .import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('dashboard/',views.index,name='hello'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
