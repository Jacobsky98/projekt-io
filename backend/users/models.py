from django.db import models
from django.utils import timezone


# Create your models here.


class User(models.Model):
    username = models.CharField(null=True, max_length=50, default='user')
    first_name = models.CharField(null=False, max_length=50)
    last_name = models.CharField(null=False, max_length=50)
    is_student = models.BooleanField()
    is_teacher = models.BooleanField()

    def __str__(self):
        return self.username
