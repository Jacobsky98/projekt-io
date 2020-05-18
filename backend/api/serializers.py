from rest_framework import serializers
from .models import Message, Course

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'title', 'content', 'date_send']


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['info', 'id_teacher']