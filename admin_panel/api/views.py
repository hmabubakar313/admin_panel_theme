from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task,Student
from .serializers import TaskSerializer,StudentSerializer
from rest_framework.decorators import api_view




@api_view(['GET'])
def apiOverview(request):
    api_urls={
        'List':'/task-list/',
        'Detail View':'/task-detail/<str:pk>/',
        'Create':'/task-create/',
        'Update':'/task-update/<str:pk>/',
        'Delete':'/task-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def tasklist(request):
    tasks=Task.objects.all()
    serializer=TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def taskdetail(request,pk):
    tasks=Task.objects.get(id=pk)
    serializer=TaskSerializer(tasks, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createtask(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('task created')

@api_view(['PUT'])
def updatetask(request,pk):
    task = Task.objects.get(id=pk)
    # update task with same id
    serializer = TaskSerializer(instance=task, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE','GET'])
def deletetask(request,pk):
    task = Task.objects.get(id=pk)
    tasks=Task.objects.all()
    
    task.delete()
    tasks=Task.objects.all()
    serializer=TaskSerializer(tasks, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def studentapiOverview(request):
    api_urls={
        'List':'/student-list/',
        'Detail View':'/student-detail/<str:pk>/',
        'Create':'/student-create/',
        'Update':'/student-update/<str:pk>/',
        'Delete':'/student-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def student_list(request):
    student=Student.objects.all()
    serializer=StudentSerializer(student, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def student_detail(request,pk):
    student=Student.objects.get(id=pk)
    serializer=StudentSerializer(student, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_student(request):
    serializer = StudentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('student created')




@api_view(['PUT'])
def update_student(request,pk):
    student = Student.objects.get(id=pk)
    # update task with same id
    serializer = StudentSerializer(instance=student, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_student(request,pk):
    student = Student.objects.get(id=pk)
    students=Student.objects.all()
    
    student.delete()
    students=Student.objects.all()
    serializer=StudentSerializer(students, many=True)
    return Response(serializer.data)
