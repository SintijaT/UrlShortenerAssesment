from django.db import models


class Item(models.Model):
    short_url = models.CharField(max_length=100, unique=True)
    original_url = models.CharField(max_length=200)
    user_id = models.CharField(max_length=10)
    requests = models.IntegerField(default=0)
    unique_requests = models.IntegerField(default=0)
