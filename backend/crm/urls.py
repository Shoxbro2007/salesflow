# crm/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # ← Добавь эту строку!
from django.conf.urls.static import static  # ← Если используешь static()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('leads.urls')),
]

# Только в DEBUG режиме (локально)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
