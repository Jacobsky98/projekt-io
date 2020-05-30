"""backend URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import UserAPIView, UserDetails, current_user, UserCreate, HelloWorldView
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithRoleView
from .views import UserAPIView, UserDetails, current_user, TeacherDetails, UserCoursesAPIView
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserAPIView.as_view()),
    path('user/<int:id>/', UserDetails.as_view()),
    path('user/courses/', UserCoursesAPIView.as_view()),
    path('user/create/', UserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithRoleView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world')

]