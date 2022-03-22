from rest_framework import serializers
# from rest_framework import Student
from api.models import Task




class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        """ fields = ('id', 'first_name', 'last_name', 'email') """
        fields = '__all__'