# Salesflow/Dockerfile
FROM python:3.10-slim

# Устанавливаем рабочую директорию — указываем, что код в папке backend
WORKDIR /app

# Копируем только requirements.txt сначала (для кэширования)
COPY backend/requirements.txt .

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь backend
COPY backend/ .

# Команда запуска с миграциями и созданием суперпользователя
CMD ["sh", "-c", "python manage.py migrate --noinput && python create_superuser.py && gunicorn crm.wsgi:application --bind 0.0.0.0:8000"]
