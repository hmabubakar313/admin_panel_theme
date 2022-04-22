from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib import admin
from django.contrib.auth import authenticate
from django import forms
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required



def home(request,*args,**kwargs):
    return render(request, 'sash/html/default.html')

def index(request):
    return render(request, 'sash/html/index.html')

def signup(request):
        return render(request, 'sash/html/register.html')


def save(request):
    print('before if')
    if request.method == 'POST':
        print('inside if')
        print('enter if statement')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password=make_password(password)
        print(f'username: {username}')
        print(f'password: {password}')
        print(f'email: {email}') 
        f=User(username=username,password=password,email=email)
        f.save()
        return render(request, 'sash/html/login.html')
    else:
        print('in else')
        return render(request, 'sash/html/test.html')


def login(request):
    return render(request, 'sash/html/login.html')


@login_required(login_url='/login/')
def login_user(request):
    if request.method=='POST':
        print('inside if of login_user')
        username=request.POST.get('username')
        password=request.POST.get('password')
        # print(f'email: {email}')
        print(f'username: {username}')
        print(f'password: {password}')
        user=authenticate(username=username,password=password)
        print(f'user: {user}')
        if user is not None:
            print('inside if')
            return render(request, 'sash/html/index.html')
        else:       
            print('inside else')
            return HttpResponse('login failed')
    else:
        return render(request, 'sash/html/login.html')
# @login_required(login_url='/login/')
def form(request):
    return render(request, 'sash/html/form-elements.html')
        


def logout_view(request):
    logout('login')
    return render(request, 'sash/html/login.html')

# @login_required(login_url='/login/')
def table(request):
    return render(request, 'sash/html/form_tables.html')


# @login_required(login_url='/login/')
def insert(request):
    return render(request, 'sash/html/insert.html')


def student(request):
    return render(request, 'sash/html/form_student.html')

