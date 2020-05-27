from rest_framework import serializers

from .models import Message, Course, Opinions, Annoucement, File, Grade, Task, Presence, UserCourse
from django.utils import timezone


class MessageSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100)
    content = serializers.CharField(style={'base_template': 'textarea.html'})
    date_send = serializers.DateTimeField(default=timezone.now)

    class Meta:
        model = Message
        fields = ['id', 'id_sender', 'id_receiver', 'title', 'content', 'date_send']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class AnnoucementSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(default=timezone.now)
    title = serializers.CharField(max_length=50)
    content = serializers.CharField(max_length=200)

    class Meta:
        model = Annoucement
        fields = ['id_course', 'date', 'title', 'content']


    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class CourseSerializer(serializers.ModelSerializer):
    annoucements = AnnoucementSerializer(many=True, read_only=True)
    info = serializers.CharField(max_length=50)

    class Meta:
        model = Course
        fields = ['id', 'info', 'id_teacher', 'annoucements']


    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance



class OpinionsSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100)
    content = serializers.CharField(style={'base_template': 'textarea.html'})

    class Meta:
        model = Opinions
        fields = ['id_sender', 'id_receiver', 'title', 'content']



class UserCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCourse
        fields = "__all__"


    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class FileSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=50)
    file = serializers.FileField(default='files/tmp')
    date_sent = serializers.DateTimeField()

    class Meta:
        model = File
        fields = ['title', 'file', 'date_sent']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class GradeSerializer(serializers.ModelSerializer):
    grade = serializers.IntegerField()

    class Meta:
        model = Grade
        fields = ['id_student', 'id_task', 'grade']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class TaskSerializer(serializers.ModelSerializer):
    deadline = serializers.DateTimeField(default=timezone.now)

    class Meta:
        model = Task
        fields = ['id_course', 'deadline']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class PresenceSerializer(serializers.ModelSerializer):
    was_present = serializers.BooleanField()

    class Meta:
        model = Presence
        fields = ['id_student', 'id_course', 'was_present']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

