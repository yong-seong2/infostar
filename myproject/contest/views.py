# contest/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'contest/index.html')  # 템플릿 렌더링
