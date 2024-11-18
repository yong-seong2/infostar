# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django 관리 페이지
    path('', include('contest.urls')),  # 'contest' 앱의 URL 포함
]
