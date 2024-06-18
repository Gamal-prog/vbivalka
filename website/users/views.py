from django.shortcuts import render, redirect
from .forms import UserLogin
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def userLogin(request): 
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password,)
        if user is not None:
            login(request, user)
            messages.error(request, ('You successfully loged in!'))
            return redirect('home')
        else:
            messages.error(request, ('Invalid username or password!'))
            return redirect('login')
        
    else:
        form = UserLogin()

    content = {'login_form': form}
    return render(request, 'users/index.html', content)
    
def userLogout(request): 
    logout(request)
    return redirect('login')
    
    