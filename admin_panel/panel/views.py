from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib import admin
from django.contrib.auth import authenticate
from django import forms
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login as dj_login
from django.shortcuts import redirect

from django.contrib.auth.decorators import login_required



def home(request,*args,**kwargs):
    return render(request, 'sash/html/default.html')





# @login_required(login_url='/login/')
def index(request):
    if request.method=='POST':
        print('inside if of login_user')
        username=request.POST.get('username')
        password=request.POST.get('password')
        print(f'username: {username}')
        print(f'password: {password}')
        user=authenticate(username=username,password=password)
        dj_login(request, user)
        print(f'user: {user}')
        if user is not None: 
            print('inside if')
            return render(request, 'sash/html/index.html')
        else:       
            print('inside else')
            return render(request,'sash/html/login.html')
    else:
        print('inside else of login_user')
        return render(request, 'sash/html/login.html')
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
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        password=make_password(password)
        print(f'username: {username}')
        print(f'password: {password}')
        print(f'email: {email}') 
        f=User(username=username,password=password,first_name=first_name,last_name=last_name,email=email)
        f.save()
        return render(request, 'sash/html/login.html')
    else:
        print('in else')
        return render(request, 'sash/html/test.html')


def login(request):
    return render(request, 'sash/html/login.html')


# @login_required(login_url='/login/')
# def login_user(request):
   
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


def teacher(request):
    return render(request, 'sash/html/form_teacher.html')

def school(request):
    return render(request, 'sash/html/form_school.html')


def classroom(request):
    return render(request, 'sash/html/form_classroom.html')

def staff(request):
    return render(request, 'sash/html/form_admin.html')
# def classroom(request):
#     return render(request, )


def user(request):
    return render(request, 'sash/html/login.html')

