# backend/leads/views.py
from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer

class LeadListCreateView(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

