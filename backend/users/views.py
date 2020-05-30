from django.http import HttpResponse, JsonResponse, HttpRequest
from django.db.models import Q
from .serializers import User, CourseWithTeacherSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from api.models import Course, UserCourse
# Create your views here.

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from .serializers import MyTokenObtainPairSerializer, UserSerializer


class ObtainTokenPairWithRoleView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserCoursesAPIView(APIView):
    def get(self, request):
        courses = Course.objects.filter(usercourse__id_user=request.user.id)
        serializer = CourseWithTeacherSerializer(courses, many=True)
        return Response(serializer.data)


class StudentsAPIView(APIView):
    def get(self, request):
        students = User.objects.filter(role='STUDENT')
        serializer = UserSerializer(students, many=True)
        return Response(serializer.data)


class InstructorsAPIView(APIView):
    def get(self, request):
        instructors = User.objects.filter(role='INSTRUCTOR')
        serializer = UserSerializer(instructors, many=True)
        return Response(serializer.data)


class AdminsApiView(APIView):
    def get(self, request):
        admins = User.objects.filter(role='ADMIN')
        serializer = UserSerializer(admins, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserAPIView(APIView):
    def get(self, request):
        articles = User.objects.all()
        serializer = UserSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetails(APIView):
    def get_object(self, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        article = self.get_object(id)
        serializer = UserSerializer(article)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = UserSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
