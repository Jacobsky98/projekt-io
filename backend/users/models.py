from django.db import models


# Create your models here.


class User(models.Model):
    username = models.CharField(null=False, max_length=50)
    first_name = models.CharField(null=False, max_length=50)
    last_name = models.CharField(null=False, max_length=50)
    is_student = models.BooleanField()
    is_teacher = models.BooleanField()

    def __str__(self):
        return self.username

class Grade:
    pass

