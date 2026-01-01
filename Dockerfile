# Dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

CMD ["sh", "-c", "python manage.py migrate --noinput && python create_superuser.py && gunicorn crm.wsgi:application --bind 0.0.0.0:8000"]
