from django.db import models
from django.utils import timezone
from backend import settings

# Create your models here.

class Grade(models.Model):
    value = models.IntegerField()
    date = models.DateTimeField()

class Group(models.Model):
    group_number = models.IntegerField()
    student_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)


class Course(models.Model):
    name = models.CharField(max_length=50)
    lecturer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    group_id = models.IntegerField()
    
class AttendingCourse(models.Model):
    course_id = models.ForeignKey(Course,on_delete=models.CASCADE)
    users_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    group_id = models.ForeignKey(Group,on_delete=models.CASCADE)
    grade = Grade()
    
class Activities(models.Model):
    course_id = models.ForeignKey(Course,on_delete=models.CASCADE)
    group_id = models.ForeignKey(Group,on_delete=models.CASCADE)
    date = models.DateTimeField()

class AttendingActivity(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE)
    activity_id = models.ForeignKey(Activities, on_delete=models.CASCADE)
    student_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    presence = models.BooleanField()
    #przeslane zadania do zajec


class Message(models.Model):
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sender_set")
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="receiver_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    date_send = models.DateTimeField(default=timezone.now)
