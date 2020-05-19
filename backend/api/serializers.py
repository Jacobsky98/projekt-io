from rest_framework import serializers
from .models import Message, Course, Opinions, Annoucement

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'title', 'content', 'date_send']

class AnnoucementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annoucement
        fields = ['id_course', 'date', 'title', 'content']

class CourseSerializer(serializers.ModelSerializer):
    annoucements = AnnoucementSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = ['info', 'id_teacher', 'annoucements']

class OpinionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opinions
        fields = ['id_sender', 'id_receiver', 'title', 'content']
