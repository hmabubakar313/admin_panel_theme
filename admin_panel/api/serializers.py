from rest_framework import serializers
# from rest_framework import Student
from api.models import Task,Student,Teacher,School,Classroom,Admin_Dept,User

from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
    def to_representation(self,instance):
        
        representation = super().to_representation(instance)
        representation['school'] = instance.school.school_name
        representation['student'] = instance.student.last_name
        representation['teacher_name'] = instance.teacher_name.last_name
        # get the class name
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
    # get username from user model
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['user_name'] = instance.user.username
        return representation
        

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
    # from admin dept model get school name from school model using foreign key
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        # school_name is NONE  if no school is found

        
        representation['school'] = instance.school.school_name
        if representation['school'] == None:
            print("no school found")
        return representation




# User serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "first_name", "last_name", "username","password"]


    """   extra_kwargs = {'password': {'write_only': True}}
def create(self, validated_data):
    user = User(
        username=validated_data['username'],
        password=validated_data['password']

    )
    user.set_password(validated_data['password'])
    user.save()
    return user """


#Serializer to Register User
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  class Meta:
    model = User
    fields = ('username', 'password', 'password2',
         'email', 'first_name', 'last_name')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  def create(self, validated_data):
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user
  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['username'] = instance.username
        return representation