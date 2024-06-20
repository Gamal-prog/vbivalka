from django.urls import path
from . import views

urlpatterns = [
    path('read/', views.read, name='read'),
    path('create/', views.create, name='create'),
]