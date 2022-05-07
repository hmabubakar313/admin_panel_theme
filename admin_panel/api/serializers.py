from rest_framework import serializers
# from rest_framework import Student
from api.models import Task,Student,Teacher,School,Classroom




class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'



class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'