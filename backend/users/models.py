from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone

# Create your models here.

class User(AbstractBaseUser):
    email = models.EmailField(db_index=True, unique=True)
    first_name = models.CharField(null=False, max_length=50)
    last_name = models.CharField(null=False, max_length=50)
    is_student = models.BooleanField('student status', default=False)
    is_teacher = models.BooleanField('teacher status', default=False)

    USERNAME_FIELD = 'email'



# class User(AbstractUser):
#     is_student = models.BooleanField()
#     is_teacher = models.BooleanField()
#
#     def __str__(self):
#         return self.username
#
#
# class Student(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
