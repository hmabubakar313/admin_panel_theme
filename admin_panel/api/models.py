from django.db import models
from localflavor.us.models import USStateField
from phone_field import PhoneField
from django.contrib.auth.models import User


# Create your models here.


# django user model



class School(models.Model):
    # school_id = models.AutoField(primary_key=True)
    school_name= models.CharField(max_length=200)
    school_id = models.CharField(max_length=200)
    school_address = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    country = models.CharField(max_length=50)
    postal_code = models.CharField(("zip code"), max_length=5, default="43701")
    ranking = models.IntegerField(null=True)
    url =  models.URLField(max_length = 200)
    school_type = models.CharField(max_length=200)
    school_size = models.IntegerField(null=True)
    phone_number = PhoneField(blank=True)
    file = models.ImageField(null=True,blank=True,upload_to="school_images/")   
    email = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.school_name

class Classroom(models.Model):
    name= models.CharField(max_length=200)
    number_of_student = models.CharField(max_length=50)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)

    def __str__(self):
        return str(self.name)

class Student(models.Model):
    # student_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200,null=True)
    class_name = models.ForeignKey(Classroom,on_delete=models.CASCADE,null=True)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
 
    def __str__(self):
        return str(self.first_name)


class Teacher(models.Model):
 
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200,null=True)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
    
    def __str__(self):
        return str(self.first_name)

class Admin_Dept(models.Model):
    staff_name = models.CharField(max_length=200)
    staff_degree = models.CharField(max_length=200)
    staff_address = models.CharField(max_length=200)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
         
class Task(models.Model):
    title = models.CharField(max_length=200,null=True)
    description = models.CharField(max_length=200,null=True)
    teacher_name = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True)
    class_name = models.ForeignKey(Classroom,on_delete=models.CASCADE,null=True)
    student = models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)

    def __str__(self):
        return str(self.title)




