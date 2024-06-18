from django import forms
from django.forms import TextInput, PasswordInput
from django.contrib.auth.models import User

class UserLogin(forms.ModelForm):

    class Meta:
        model = User
        fields = ('username', 'password',)

        widgets = {
            'username': TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'User name'
            }),
            'password': PasswordInput(attrs={
                'class': "form-control",
                'style': 'max-width: 250px;',
                'placeholder': 'Password'
            }),
        }