# Generated by Django 5.0.2 on 2024-04-19 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_chekup_list_alter_health_issue_patient_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment_list',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('patient_id', models.CharField(max_length=20)),
                ('patient_name', models.CharField(max_length=30)),
                ('mobile_no', models.CharField(max_length=20)),
                ('al_mobile_no', models.CharField(max_length=20)),
                ('doctor_name', models.CharField(max_length=20)),
                ('Symtoms', models.CharField(max_length=20)),
                ('location', models.CharField(max_length=20)),
                ('date', models.CharField(max_length=20)),
                ('time', models.CharField(max_length=20)),
                ('status', models.CharField(max_length=20)),
            ],
        ),
    ]