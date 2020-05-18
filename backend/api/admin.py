from django.contrib import admin
from .models import Annoucement,Course,Presence,User_Courses,Task,File,User_Tasks_Files,Grade,Opinions,Message
# Register your models here.

admin.site.register(Annoucement)
admin.site.register(Course)
admin.site.register(Presence)
admin.site.register(User_Courses)
admin.site.register(Task)
admin.site.register(File)
admin.site.register(User_Tasks_Files)
admin.site.register(Grade)
admin.site.register(Opinions)
admin.site.register(Message)
