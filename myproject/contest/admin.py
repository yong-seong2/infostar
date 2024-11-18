# contest/admin.py
from django.contrib import admin
from .models import Contest, Activity, Team

# 모델을 Django 관리 사이트에 등록
admin.site.register(Contest)
admin.site.register(Activity)
admin.site.register(Team)
