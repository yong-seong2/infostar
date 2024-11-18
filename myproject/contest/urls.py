# contest/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # 루트 URL에 index 뷰 연결
]
