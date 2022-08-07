from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task,Student,Teacher,School,Classroom,Admin_Dept
from .serializers import TaskSerializer,StudentSerializer,TeacherSerializer,SchoolSerializer,ClassroomSerializer,Admin_DeptSerializer
from rest_framework.decorators import api_view


# task api view

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
    # get school name from school id using function from serializer
    # Task['school_name']=TaskSerializer.sendSchoolName(Task,tasks)
    return Response(serializer.data)

@api_view(['GET'])
def taskdetail(request,pk):
    tasks=Task.objects.get(id=pk)
    serializer=TaskSerializer(tasks, many=False)
    


    return Response(serializer.data)
    # return Response(serializer.data)

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

# student api

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


# teacher api
@api_view(['GET'])
def teacherapiOverview(request):
    api_urls={
        'List':'/teacher-list/',
        'Detail View':'/teacher-detail/<str:pk>/',
        'Create':'/teacher-create/',
        'Update':'/teacher-update/<str:pk>/',
        'Delete':'/teacher-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def teacher_list(request):
    teacher=Teacher.objects.all()
    serializer=TeacherSerializer(teacher, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def teacher_detail(request,pk):
    teacher=Teacher.objects.get(id=pk)
    serializer=TeacherSerializer(teacher, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_teacher(request):
    serializer = TeacherSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('Teacher created')




@api_view(['PUT'])
def update_teacher(request,pk):
    teacher = Teacher.objects.get(id=pk)
    # update task with same id
    serializer = TeacherSerializer(instance=teacher, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_teacher(request,pk):
    teacher = Teacher.objects.get(id=pk)
    teachers=Teacher.objects.all()
    
    teacher.delete()
    teachers=Teacher.objects.all()
    serializer=TeacherSerializer(teachers, many=True)
    return Response(serializer.data)



# classroom api

@api_view(['GET'])
def classroomapiOverview(request):
    api_urls={
        'List':'/class-list/',
        'Detail View':'/class-detail/<str:pk>/',
        'Create':'/class-create/',
        'Update':'/class-update/<str:pk>/',
        'Delete':'/class-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def classroom_list(request):
    classroom=Classroom.objects.all()
    serializer=ClassroomSerializer(classroom, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def classroom_detail(request,pk):
    classroom=Classroom.objects.get(id=pk)
    serializer=ClassroomSerializer(classroom, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_classroom(request):
    serializer = ClassroomSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('classroom created')




@api_view(['PUT'])
def update_classroom(request,pk):
    classroom = Classroom.objects.get(id=pk)
    # update task with same id
    serializer = ClassroomSerializer(instance=classroom, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_classroom(request,pk):
    classroom = Classroom.objects.get(id=pk)
    classrooms=Classroom.objects.all()
    
    classroom.delete()
    classrooms=Classroom.objects.all()
    serializer=ClassroomSerializer(classrooms, many=True)
    return Response(serializer.data)


# school api


@api_view(['GET'])
def schoolapiOverview(request):
    api_urls={
        'List':'/school-list/',
        'Detail View':'/school-detail/<str:pk>/',
        'Create':'/school-create/',
        'Update':'/school-update/<str:pk>/',
        'Delete':'/school-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def school_list(request):
    school=School.objects.all()
    serializer=SchoolSerializer(school, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def school_detail(request,pk):
    school=School.objects.get(id=pk)
    serializer=SchoolSerializer(school, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_school(request):
    serializer = SchoolSerializer(data=request.data)

    if serializer.is_valid():
        print('================ inside serializer =============')
        serializer.save()
        print('-------------------------------------------------------------')
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('School created')


@api_view(['PUT'])
def update_school(request,pk):
    school = School.objects.get(id=pk)
    # update task with same id
    serializer = SchoolSerializer(instance=school, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_school(request,pk):
    school = School.objects.get(id=pk)
    schools=School.objects.all()
    
    school.delete()
    schools=School.objects.all()
    serializer=SchoolSerializer(schools, many=True)
    return Response(serializer.data)





# admin dept api

@api_view(['GET'])
def adminapiOverview(request):
    api_urls={
        'List':'/admin-list/',
        'Detail View':'/admin-detail/<str:pk>/',
        'Create':'/admin-create/',
        'Update':'/admin-update/<str:pk>/',
        'Delete':'/admin-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def admin_list(request):
    admin=Admin_Dept.objects.all()
    serializer=Admin_DeptSerializer(admin, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def admin_detail(request,pk):
    admin=Admin_Dept.objects.get(id=pk)
    serializer=Admin_DeptSerializer(student, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_admin(request):
    serializer = Admin_DeptSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('student created')




@api_view(['PUT'])
def update_admin(request,pk):
    admin = Admin_Dept.objects.get(id=pk)
    # update task with same id
    serializer = Admin_DeptSerializer(instance=admin, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_admin(request,pk):
    admin = Admin_Dept.objects.get(id=pk)
    admins=Admin_Dept.objects.all()
    
    admin.delete()
    admins=Admin_Dept.objects.all()
    serializer=Admin_DeptSerializer(admins, many=True)
    return Response(serializer.data)

