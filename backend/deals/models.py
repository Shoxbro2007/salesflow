class Deal(models.Model):
    STATUS_CHOICES = [
        ('new', 'Новый'),
        ('contacted', 'Связались'),
        ('in_progress', 'В работе'),
        ('proposal', 'Предложение'),
        ('won', 'Успешно'),
        ('lost', 'Потерян'),
    ]
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    amount = models.DecimalField("Сумма", max_digits=10, decimal_places=2, blank=True, null=True)
    status = models.CharField("Статус", max_length=20, choices=STATUS_CHOICES, default='new')
    next_contact = models.DateField("Следующий контакт", blank=True, null=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
