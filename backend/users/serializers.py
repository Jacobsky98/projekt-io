from rest_framework import serializers
from .models import User
from api.models import Course

from rest_framework_jwt.settings import api_settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['role'] = user.role
        return token


class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    role = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'role', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CourseWithTeacherSerializer(serializers.ModelSerializer):
    teacher_first_name = serializers.ReadOnlyField(source='id_teacher.first_name')
    teacher_last_name = serializers.ReadOnlyField(source='id_teacher.last_name')

    class Meta:
        model = Course
        fields = ('id', 'name', 'id_teacher', 'teacher_first_name', 'teacher_last_name', 'info')
