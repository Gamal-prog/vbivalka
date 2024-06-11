from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('read/', views.read, name='read'),
    path('create/', views.create, name='create'),
]