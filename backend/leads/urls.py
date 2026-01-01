# leads/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('leads/', views.LeadListCreateView.as_view(), name='lead-list-create'),
    path('token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]


