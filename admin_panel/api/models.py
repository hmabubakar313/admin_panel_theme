from django.db import models


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
         
    