from django import forms
from django.forms import TextInput, FloatField, NumberInput
from .models import Point

class PointForm(forms.ModelForm):

    class Meta:
        model = Point
        fields = ('name', 'longitude', 'latitude',)

        widgets = {
            'name': TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Name'
            }),
            'longitude': NumberInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Longitude'
            }),
            'latitude': NumberInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Latitude'
            }),
        }