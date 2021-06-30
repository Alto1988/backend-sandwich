from django.shortcuts import render
from rest_framework import generics
from .serializers import SandwichDetailSerializer, SandwichListSerializer
from .models import SandwichStore
# Create your views here.
# app_name = 'sandwich'
 


class SandwichListAPIView(generics.ListAPIView):
    queryset = SandwichStore.objects.all()
    serializer_class = SandwichListSerializer
    
        
#this is useful for the backend of the chat app dont forget the look up field
class SandwichRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = 'id'
    queryset = SandwichStore.objects.all()
    serializer_class = SandwichDetailSerializer


class SandwichCreateAPIView(generics.CreateAPIView):
    queryset = SandwichStore.objects.all()
    serializer_class = SandwichDetailSerializer
    
class SandwichRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = 'id'
    queryset = SandwichStore.objects.all()
    serializer_class = SandwichDetailSerializer

class SandwichDestroyAPIView(generics.DestroyAPIView):
    lookup_field = 'id'
    queryset = SandwichStore.objects.all()