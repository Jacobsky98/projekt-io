from django.http import HttpResponse, JsonResponse
from django.views.generic import UpdateView
from rest_framework import permissions

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Message, Course, Opinions, File, Annoucement, Grade, Task, Presence
from .serializers import MessageSerializer, CourseSerializer, OpinionsSerializer, FileSerializer, AnnoucementSerializer, GradeSerializer, TaskSerializer, PresenceSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class AnnoucementAPIView(APIView):
    def get(self, request, id=None):
        serializer = AnnoucementSerializer()
        if id:
            articles = Annoucement.objects.get(id=id)
            serializer = AnnoucementSerializer(articles)
        else:
            articles = Annoucement.objects.all()
            serializer = AnnoucementSerializer(articles, many=True)
        return Response(serializer.data)

class AnnoucementCreate(APIView):

    def post(self, request):
        serializer = AnnoucementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MessageAPIView(APIView):
    model = Message
    def get(self, request, id=None):
        serializer = MessageSerializer()
        if id:
            articles = Message.objects.get(id=id)
            serializer = MessageSerializer(articles)
        else:
            articles = Message.objects.all()
            serializer = MessageSerializer(articles, many=True)
        return Response(serializer.data)


class MessageCreate(APIView):

    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        # if Token.objects.filter(user = request.data['id_sender']).exist():
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseAPIView(APIView):

    def get(self, request, id=None):
        serializer = CourseSerializer()
        if id:
            articles = Course.objects.get(id=id)
            serializer = CourseSerializer(articles)
        else:
            articles = Course.objects.all()
            serializer = CourseSerializer(articles, many=True)
        return Response(serializer.data)

class CourseCreate(APIView):

    def post(self, request, format='json'):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            course = serializer.save()
            if course:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseDetails(APIView):
    def get_object(self, id):
        try:
            return Course.objects.get(id=id)
        except Course.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        article = self.get_object(id)
        serializer = CourseSerializer(article)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = CourseSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

class OpinionsDetails(APIView):
    def get_object(self, id):
        try:
            return Opinions.objects.get(id_receiver=id)
        except Opinions.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = OpinionsSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        article = self.get_object(id)
        serializer = OpinionsSerializer(article)
        return Response(serializer.data)

    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

class OpinionsAPIView(APIView):
    def get(self, request, id=None):
        serializer = OpinionsSerializer()
        if id:
            articles = Opinions.objects.get(id=id)
            serializer = OpinionsSerializer(articles)
        else:
            articles = Opinions.objects.all()
            serializer = OpinionsSerializer(articles, many=True)
        return Response(serializer.data)

class OpinionsCreate(APIView):

    def post(self, request, format='json'):
        serializer = OpinionsSerializer(data=request.data)
        if serializer.is_valid():
            opinions = serializer.save()
            if opinions:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FileAPIView(APIView):
    def get(self, request, id=None):
        serializer = FileSerializer()
        if id:
            articles = File.objects.get(id=id)
            serializer = FileSerializer(articles)
        else:
            articles = File.objects.all()
            serializer = FileSerializer(articles, many=True)
        return Response(serializer.data)

class FileCreate(APIView):

    def post(self, request, format=None):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GradeAPIView(APIView):

    def get(self, request, id=None):
        serializer = GradeSerializer()
        if id:
            articles = Grade.objects.get(id=id)
            serializer = GradeSerializer(articles)
        else:
            articles = Grade.objects.all()
            serializer = GradeSerializer(articles, many=True)
        return Response(serializer.data)

class GradeCreate(APIView):

    def post(self, request, format='json'):
        serializer = GradeSerializer(data=request.data)
        if serializer.is_valid():
            grade = serializer.save()
            if grade:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskAPIView(APIView):

    def get(self, request, id=None):
        serializer = TaskSerializer()
        if id:
            articles = Task.objects.get(id=id)
            serializer = TaskSerializer(articles)
        else:
            articles = Task.objects.all()
            serializer = TaskSerializer(articles, many=True)
        return Response(serializer.data)

class TaskCreate(APIView):

    def post(self, request, format='json'):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            task = serializer.save()
            if task:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PresenceAPIView(APIView):

    def get(self, request, id=None):
        serializer = PresenceSerializer()
        if id:
            articles = Presence.objects.get(id=id)
            serializer = PresenceSerializer(articles)
        else:
            articles = Presence.objects.all()
            serializer = PresenceSerializer(articles, many=True)
        return Response(serializer.data)

class PresenceCreate(APIView):

    def post(self, request, format='json'):
        serializer = PresenceSerializer(data=request.data)
        if serializer.is_valid():
            presence = serializer.save()
            if presence:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)