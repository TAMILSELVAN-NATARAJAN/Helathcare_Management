# Generated by Django 5.0.2 on 2024-04-18 12:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_doctor_register'),
    ]

    operations = [
        migrations.CreateModel(
            name='Medical_records',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('patient_name', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('medicine_name', models.CharField(max_length=50)),
                ('noon', models.CharField(max_length=20)),
                ('time', models.DateTimeField()),
                ('dose', models.CharField(max_length=20)),
                ('patient_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.patient_register')),
            ],
        ),
    ]