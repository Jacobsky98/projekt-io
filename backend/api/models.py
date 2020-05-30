from django.db import models
from django.utils import timezone
from backend import settings
from django import forms

# Create your models here.
# ----------Modele wedlug ERD---------#
class Annoucement(models.Model):
    id_course = models.ForeignKey(settings.AUTH_COURSE_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=200)


class Course(models.Model):
    id_teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False)
    info = models.TextField()



class Presence(models.Model):
    id_student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_course = models.ForeignKey(Course, on_delete=models.CASCADE)
    was_present = models.BooleanField()


class UserCourse(models.Model):
    id_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_course = models.ForeignKey(Course, on_delete=models.CASCADE)


class Task(models.Model):
    id_course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.TextField()
    deadline = models.DateTimeField(default=timezone.now)


class File(models.Model):
    # filename = forms.CharField(max_length=50)
    file = models.FileField(upload_to='files', default='files/tmp')
    date_sent = models.DateTimeField(default=timezone.now)


class User_Tasks_Files(models.Model):
    id_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_task = models.ForeignKey(Task, on_delete=models.CASCADE)
    if_file = models.ForeignKey(File, on_delete=models.CASCADE)


class Grade(models.Model):
    id_student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_task = models.ForeignKey(Task, on_delete=models.CASCADE)
    grade = models.IntegerField()


class Opinions(models.Model):
    id_sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sender_opinion_set")
    id_receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="receiver_opinion_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)


class Message(models.Model):
    id_sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sender_msg_set")
    id_receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="receiver_msg_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    date_send = models.DateTimeField(default=timezone.now)


