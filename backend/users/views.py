from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .serializers import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

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


class HelloWorldView(APIView):

    def get(self, request):
        return Response(data={"hello":"world"}, status=status.HTTP_200_OK)

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
