#  admin_panel
from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('panel.urls')),
    path('api/', include('api.urls')),  
]
