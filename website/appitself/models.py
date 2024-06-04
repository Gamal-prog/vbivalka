from django.db import models

# Create your models here.
class Point(models.Model):

    #atributes
    name = models.CharField(max_length=100, blank=False)
    longitude = models.FloatField(default=0)
    latitude = models.FloatField(default=0)

    def __str__(self):
        return self.name