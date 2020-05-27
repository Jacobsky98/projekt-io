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
from .views import MessageAPIView, CourseAPIView, CourseDetails, OpinionsDetails, AnnoucementAPIView, GradeAPIView, TaskAPIView, PresenceAPIView
from .views import CourseCreate, MessageCreate, FileCreate, OpinionsCreate, AnnoucementCreate, GradeCreate, TaskCreate, PresenceCreate
from django.contrib.auth import views as auth_views

urlpatterns = [
    #get
    path('messages/', MessageAPIView.as_view()),
    path('courses/', CourseAPIView.as_view()),
    path('course/<int:id>/', CourseDetails.as_view()),
    path('opinions/<int:id>/', OpinionsDetails.as_view()),
    path('annoucements/<int:id>/', AnnoucementAPIView.as_view()),
    path('grades/<int:id>/', GradeAPIView.as_view()),
    path('tasks/<int:id>/', TaskAPIView.as_view()),
    path('presences/<int:id>/', PresenceAPIView.as_view()),

    #post
    path('courses/add', CourseCreate.as_view(), name='course_add'),
    path('messages/send', MessageCreate.as_view(), name='message_send'),
    path('files/add', FileCreate.as_view(), name='file_add'),
    path('opinions/add', OpinionsCreate.as_view(), name='opinion_add'),
    path('annoucements/add', AnnoucementCreate.as_view(), name='annoucement_add'),
    path('grades/add', GradeCreate.as_view(), name='grade_add'),
    path('tasks/add', TaskCreate.as_view(), name='task_add'),
    path('presences/add', PresenceCreate.as_view(), name='presence_add')
]