# Generated by Django 4.0.2 on 2022-04-19 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='password',
        ),
    ]