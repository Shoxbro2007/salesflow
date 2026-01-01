# backend/Dockerfile
FROM python:3.10-slim

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Копируем и устанавливаем зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируем код
COPY . .


# Добавь это в конец Dockerfile
CMD ["sh", "-c", "python manage.py migrate --noinput && python create_superuser.py && gunicorn crm.wsgi:application --bind 0.0.0.0:8000"]

