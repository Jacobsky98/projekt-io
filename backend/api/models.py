from django.db import models
from django.utils import timezone
from users.models import User
from django import forms

# Create your models here.
# ----------Modele wedlug ERD---------#
class Course(models.Model):
    id_teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    info = models.CharField(max_length=50)

class Annoucement(models.Model):
    id_course = models.ForeignKey(Course, related_name='annoucements', on_delete=models.CASCADE)
    date = models.DateTimeField()
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=200)

class Presence(models.Model):
    id_student = models.ForeignKey(User,on_delete=models.CASCADE)
    id_course = models.ForeignKey(Course,on_delete=models.CASCADE)
    was_present = models.BooleanField()

class User_Courses(models.Model):
    id_users = models.ForeignKey(User,on_delete=models.CASCADE)
    id_course = models.ForeignKey(Course,on_delete=models.CASCADE)

class Task(models.Model):
    id_course = models.ForeignKey(Course,on_delete=models.CASCADE)
    deadline = models.DateTimeField(auto_now_add=True)

class File(models.Model):
    title = forms.CharField(max_length=50)
    file = forms.FileField()
    date_sent = models.DateTimeField(auto_now_add=True)

class User_Tasks_Files(models.Model):
    id_users = models.ForeignKey(User,on_delete=models.CASCADE)
    id_task = models.ForeignKey(Task,on_delete=models.CASCADE)
    if_file = models.ForeignKey(File,on_delete=models.CASCADE)

class Grade(models.Model):
    id_student = models.ForeignKey(User,on_delete=models.CASCADE)
    id_task = models.ForeignKey(Task,on_delete=models.CASCADE)
    grade = models.IntegerField()

class Opinions(models.Model):
    id_sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sender_opinion_set")
    id_receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="receiver_opinion_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)

class Message(models.Model):
    id_sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sender_msg_set")
    id_receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="receiver_msg_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    date_send = models.DateTimeField(default=timezone.now)

    
#---------------------------------------------#