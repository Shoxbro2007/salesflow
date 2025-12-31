class Task(models.Model):
    title = models.CharField("Название", max_length=100)
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE, blank=True, null=True)
    due_date = models.DateTimeField("Срок")
    completed = models.BooleanField("Выполнено", default=False)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
