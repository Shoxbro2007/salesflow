# leads/serializers.py
from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Lead
        fields = ['id', 'name', 'email', 'phone', 'status', 'status_display', 'created_at']


