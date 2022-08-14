from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task,Student,Teacher,School,Classroom,Admin_Dept
from .serializers import TaskSerializer,StudentSerializer,TeacherSerializer,SchoolSerializer,ClassroomSerializer,Admin_DeptSerializer,UserSerializer,UserSerializer
from rest_framework.decorators import api_view
from django.contrib.auth.models import User

from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics

# Class based view to Get User Details using Token Authentication
class UserDetailAPI(APIView):
  authentication_classes = (TokenAuthentication,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer

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
    # get task using username
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
    class_school=Classroom.objects.all().values_list('school_id', flat=True)
    print('class_school :' ,class_school)   
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
    # get username of current user 
    if request.user.is_authenticated:
        school = School.objects.filter(user=request.user)
        serializer=SchoolSerializer(school, many=True)
        return Response(serializer.data)
    """ username=request.user.username
    if (username==request.user.username):
        school=School.objects.filter(user=request.user)
        serializer=SchoolSerializer(school, many=True)
        return Response(serializer.data) """
  





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

# User API

@api_view(['GET'])
def userapiOverview(request):
    api_urls={
        'List':'/user-list/',
        'Detail View':'/user-detail/<str:pk>/',
        'Create':'/user-create/',
        'Update':'/user-update/<str:pk>/',
        'Delete':'/user-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def user_list(request):
    user=User.objects.all()
    serializer=UserSerializer(user, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def user_detail(request,pk):
    user=User.objects.get(id=pk)
    serializer=UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print('get data from serializer: ',serializer.data)
        print(serializer.data)
    return Response('user created')




@api_view(['PUT'])
def update_user(request,pk):
    user = User.objects.get(id=pk)
    # update task with same id
    serializer = UserSerializer(instance=user, data=request.data)
   

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE','GET'])
def delete_user(request,pk):
    user =User.objects.get(id=pk)
    users=User.objects.all()
    
    user.delete()
    users=User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)




# ================================================
#         get the data according to the current user
# ================================================

@api_view(['GET'])
def my_user(request):
    username=request.user.username
    # get task according to current user
    if (username==request.user.username):
        school = School.objects.filter(user=request.user)
        serializer=SchoolSerializer(school, many=True)
        return Response(serializer.data)
        # task = Task.objects.filter(user=request.user)
        # student = Student.objects.filter(school__in=school)
        # classroom = Classroom.objects.filter(school__in=school)
        # student = Student.objects.filter(school=school)
        # class_name = Classroom.objects.all()
        # serializer = SchoolSerializer(school, many=True)
        # serializer = TaskSerializer(task, many=True)
        # serializer1 = StudentSerializer(student, many=True)
        # serializer2 = ClassroomSerializer(classroom, many=True)
        # serializer2 = ClassroomSerializer(class_name, many=True)
        """ return Response({'task':serializer.data,'student':serializer1.data,'classroom':serializer2.data,'school':serializer.data}) """
        # return Response(serializer1.data)
        # return Response(serializer1.data)
    
 