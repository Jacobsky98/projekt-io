from django.db import models
from django.utils import timezone


# Create your models here.


class User(models.Model):
    username = models.CharField(null=True, max_length=50, default='user')
    first_name = models.CharField(null=False, max_length=50)
    last_name = models.CharField(null=False, max_length=50)
    # password = forms.CharField(max_length=32, widget=forms.PasswordInput)
    is_student = models.BooleanField()
    is_teacher = models.BooleanField()

    def __str__(self):
        return self.username


class Student(User):
    is_student = True
    is_teacher = False


class Teacher(User):
    is_teacher = True
    is_student = False


class Grade(models.Model):
    value = models.IntegerField()


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sender_set")
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="receiver_set")
    title = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    date_send = models.DateTimeField(default=timezone.now)
