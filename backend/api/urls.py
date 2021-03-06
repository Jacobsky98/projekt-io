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
from .views import MessageAPIView, CourseAPIView, CourseDetails, OpinionsDetails, AnnoucementAPIView, GradeAPIView, TaskAPIView, ClassesAPIView, OpinionsAPIView, \
    FileAPIView, UserCourseAPIView, UserTasksFilesCreate, UserTasksFilesAPIView
from .views import CourseCreate, MessageCreate, FileCreate, OpinionCreate, AnnoucementCreate, GradeCreate, TaskCreate, \
    ClassesCreate, FileDownload, UserCourseCreate, StudentPresenceAPIView, StudentPresenceAdd, StudentPresenceDetails
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
    path('opinions/<int:id>/', OpinionsAPIView.as_view()),

    path('classes/course/<int:id>/', ClassesAPIView.as_view()),
    path('classes/<int:id>/presence/', StudentPresenceAPIView.as_view()),
    path('classes/<int:id_classes>/presence/<int:id_student>/', StudentPresenceDetails.as_view()),

    path('annoucements/', AnnoucementAPIView.as_view()),
    path('annoucements/course/<int:id_course>/', AnnoucementAPIView.as_view()),
    path('annoucement/<int:id>/', AnnoucementAPIView.as_view()),

    path('grades/', GradeAPIView.as_view()),
    path('grade/<int:id>/', GradeAPIView.as_view()),
    path('grades/taskStudent/<int:id_task>/<int:id_student>/', GradeAPIView.as_view()),
    path('grades/courseStudent/<int:id_course>/<int:id_student>/', GradeAPIView.as_view()),
    path('grades/task/<int:id_task>/', GradeAPIView.as_view()),
    path('grades/student/<int:id_student>/', GradeAPIView.as_view()),

    path('tasks/', TaskAPIView.as_view()),
    path('task/<int:id>/', TaskAPIView.as_view()),

    # path('presences/', PresenceAPIView.as_view()),
    # path('presence/<int:id>/', PresenceAPIView.as_view()),
    # path('presences/<int:id_course>/<int:id_student>/', PresenceAPIView.as_view()),
    # path('presences/course/<int:id_course>/', PresenceAPIView.as_view()),
    # path('presences/student/<int:id_student>/', PresenceAPIView.as_view()),

    path('files/', FileAPIView.as_view()),
    path('file/<int:id>/', FileDownload.as_view()),
    path('api_documentation/', schema_view),

    path('userCourse/', UserCourseAPIView.as_view()),
    path('userCourse/user/<int:id_user>/', UserCourseAPIView.as_view()),
    path('userCourse/course/<int:id_course>/', UserCourseAPIView.as_view()),
    path('userCourse/<int:id_course>/<int:id_user>/', UserCourseAPIView.as_view()),

    path('tasks/course/<int:id_course>/', UserTasksFilesAPIView.as_view()),

    #post
    path('userCourse/add/', UserCourseCreate.as_view(), name='userCourse_add'),
    path('course/add/', CourseCreate.as_view(), name='course_add'),
    path('message/send/', MessageCreate.as_view(), name='message_send'),
    path('file/add/', FileCreate.as_view(), name='file_add'),
    path('opinion/add/', OpinionCreate.as_view(), name='opinion_add'),
    path('annoucement/add/', AnnoucementCreate.as_view(), name='annoucement_add'),
    path('grade/add/', GradeCreate.as_view(), name='grade_add'),
    path('task/add/', TaskCreate.as_view(), name='task_add'),
    path('classes/add/', ClassesCreate.as_view(), name='classes_add'),
    path('presence/add/', StudentPresenceAdd.as_view(), name='presence_add'),
    path('presence/add/<int:id>/', StudentPresenceAdd.as_view(), name='presence_add_student'),
    path('task/assign', UserTasksFilesCreate.as_view(), name='assign_file_to_task'),
]