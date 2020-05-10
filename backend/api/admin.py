from django.contrib import admin
from .models import Message,Group,Course,AttendingCourse,Activities,AttendingActivity
# Register your models here.

admin.site.register(Message)
admin.site.register(Group)
admin.site.register(Course)
admin.site.register(AttendingCourse)
admin.site.register(Activities)
admin.site.register(AttendingActivity)