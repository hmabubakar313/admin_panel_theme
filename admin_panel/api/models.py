from django.db import models
from phone_field import PhoneField

# Create your models here.

class Task(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200,null=True)
    description = models.CharField(max_length=200,null=True) 

    def __str__(self):
        return self.title
class Student(models.Model):
   
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200,null=True)
 
    def __str__(self):
        return self.first_name

class Teacher(models.Model):
   
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.first_name

class Classroom(models.Model):
    name= models.CharField(max_length=200)
    number_of_student = models.CharField(max_length=50)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)


    def __str__(self):
        return self.name


class School(models.Model):
    school_name= models.CharField(max_length=200)
    school_id = models.CharField(max_length=200)
    school_address = models.CharField(max_length=200)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.IntegerField(null=True)
    ranking = models.IntegerField(null=True)
    url = models.CharField(max_length=200)
    school_type = models.CharField(max_length=200)
    school_size = models.IntegerField(null=True)
    phone_number = PhoneField(blank=True)
    file = models.ImageField(null=True,blank=True,upload_to="school_images/")
    email = models.CharField(max_length=200)
    


    def __str__(self):
        return self.school_name





         
    