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
    name = serializers.CharField(max_length=50)
    info = serializers.CharField()

    class Meta:
        model = Course
        fields = ['id', 'name', 'id_teacher', 'info', 'annoucements']

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

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance



class FileSerializer(serializers.ModelSerializer):
    # filename = serializers.CharField(max_length=50)
    file = serializers.FileField(default='files/tmp')
    date_sent = serializers.DateTimeField(default=timezone.now)

    class Meta:
        model = File
        # fields = ['filename', 'file', 'date_sent']
        fields = '__all__'

    def create(self, validated_data, filename=None):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class GradeSerializer(serializers.ModelSerializer):
    grade = serializers.IntegerField()
    date = serializers.DateTimeField(default=timezone.now)
    info = serializers.CharField(max_length=100, default='')

    class Meta:
        model = Grade
        fields = ['id_student', 'id_task', 'id_course', 'grade', 'date', 'info']

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
        fields = ['id_student', 'id_course', 'date', 'was_present']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class UserCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCourse
        fields = ['id_user', 'id_course']


