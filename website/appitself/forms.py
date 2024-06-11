from django import forms
from django.forms import TextInput, NumberInput
from .models import Point

class PointForm(forms.ModelForm):

    class Meta:
        model = Point
        fields = ('name', 'longitude', 'latitude', 'street',)

        widgets = {
            'name': TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Name'
            }),
            'street': TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Street'
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