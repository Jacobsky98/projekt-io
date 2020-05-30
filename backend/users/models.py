from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone

# Create your models here.


from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    role = models.CharField(blank=False, max_length=30)
