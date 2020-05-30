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
from .views import MessageAPIView, CourseAPIView, CourseDetails, OpinionsDetails, AnnoucementAPIView, GradeAPIView, TaskAPIView, PresenceAPIView, OpinionsAPIView, \
    FileAPIView, UserCourseCreate
from .views import CourseCreate, MessageCreate, FileCreate, OpinionsCreate, AnnoucementCreate, GradeCreate, TaskCreate, PresenceCreate, FileDownload
from django.contrib.auth import views as auth_views
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='api')

urlpatterns = [
    #get
    path('messages/', MessageAPIView.as_view()),
    path('message/<int:id>/', MessageAPIView.as_view()),
    path('courses/', CourseAPIView.as_view()),
    path('course/<int:id>/', CourseAPIView.as_view()),
    path('opinions/', OpinionsAPIView.as_view()),
    path('opinion/<int:id>/', OpinionsAPIView.as_view()),
    path('annoucements/', AnnoucementAPIView.as_view()),
    path('annoucement/<int:id>/', AnnoucementAPIView.as_view()),
    path('grades/', GradeAPIView.as_view()),
    path('grade/<int:id>/', GradeAPIView.as_view()),
    path('tasks/', TaskAPIView.as_view()),
    path('task/<int:id>/', TaskAPIView.as_view()),
    path('presences/', PresenceAPIView.as_view()),
    path('presence/<int:id>/', PresenceAPIView.as_view()),
    path('files/', FileAPIView.as_view()),
    path('file/<int:id>/', FileDownload.as_view()),
    path('api_documentation/', schema_view),

    #post
    path('userCourse/add/', UserCourseCreate.as_view(), name='userCourse_add'),
    path('course/add/', CourseCreate.as_view(), name='course_add'),
    path('message/send/', MessageCreate.as_view(), name='message_send'),
    path('file/add/', FileCreate.as_view(), name='file_add'),
    path('opinion/add/', OpinionsCreate.as_view(), name='opinion_add'),
    path('annoucement/add/', AnnoucementCreate.as_view(), name='annoucement_add'),
    path('grade/add/', GradeCreate.as_view(), name='grade_add'),
    path('task/add/', TaskCreate.as_view(), name='task_add'),
    path('presence/add/', PresenceCreate.as_view(), name='presence_add'),
]