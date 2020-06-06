from django.contrib import admin
from .models import Annoucement,Course,Classes, UserClasses,UserCourse,Task,File,User_Tasks_Files,Grade,Opinions,Message
# Register your models here.

admin.site.register(Annoucement)
admin.site.register(Course)
admin.site.register(Classes)
admin.site.register(UserClasses)
admin.site.register(UserCourse)
admin.site.register(Task)
admin.site.register(File)
admin.site.register(User_Tasks_Files)
admin.site.register(Grade)
admin.site.register(Opinions)
admin.site.register(Message)
