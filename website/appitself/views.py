from django.shortcuts import render
from .models import Point
from .forms import PointForm
from django.http import JsonResponse

# Create your views here.
def read(request):
    points = Point.objects.all()

    path = 'appitself/read.html'
    context = {'points': points}
    return render(request, path, context)

def create(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = PointForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Success'})
    else:
        form = PointForm()

    path = 'appitself/create.html'
    context = {'new_point': form}
    return render(request, path, context)

