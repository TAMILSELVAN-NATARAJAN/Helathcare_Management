# Generated by Django 5.0.2 on 2024-04-19 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_health_issue_delete_health_isssue'),
    ]

    operations = [
        migrations.AlterField(
            model_name='health_issue',
            name='mobile_no',
            field=models.CharField(max_length=40),
        ),
    ]