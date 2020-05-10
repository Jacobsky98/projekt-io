from django.db import models
from django.utils import timezone
from users.models import User

# Create your models here.

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
