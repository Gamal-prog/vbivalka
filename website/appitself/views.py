from django.shortcuts import render
from .models import Point
from .forms import PointForm
from django.http import JsonResponse

# Create your views here.
def read(request):
    points = Point.objects.all()
    content = {'points': points}
    return render(request, 'appitself/read.html', content)

def create(request):
    form = PointForm()
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = PointForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Success'})

    content = {'new_point': form}
    return render(request, 'appitself/create.html', content)

