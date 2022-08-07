from rest_framework import serializers
# from rest_framework import Student
from api.models import Task,Student,Teacher,School,Classroom,Admin_Dept




class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        representation['student'] = instance.student.last_name
        representation['teacher_name'] = instance.teacher_name.last_name
        representation['class_name'] = instance.class_name.name
        return representation

class StudentSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Student
        fields = '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        representation['class_name'] = instance.class_name.name
        return representation 


class TeacherSerializer(serializers.ModelSerializer):
   

    class Meta:
        model = Teacher
        fields = '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        return representation
        



class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
        

class ClassroomSerializer(serializers.ModelSerializer):
    
        
    class Meta:
        model = Classroom
        fields = '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        return representation

class Admin_DeptSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Admin_Dept
        fields =  '__all__'
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        return representation