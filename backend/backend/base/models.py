from django.db import models

# Create your models here.

class Appointment_list(models.Model):

    id=models.BigAutoField(primary_key=True)
    patient_id=models.CharField(max_length=20)
    patient_name=models.CharField(max_length=30)
    email_id=models.CharField(max_length=30)
    mobile_no=models.CharField(max_length=20)
    al_mobile_no=models.CharField(max_length=20)
    doctor_name=models.CharField(max_length=20)
    Symtoms=models.CharField(max_length=20)
    location=models.CharField(max_length=20)
    date=models.CharField(max_length=20)
    time=models.CharField(max_length=20)
    status=models.CharField(max_length=20)


    def __str__(self) :
        return self.patient_name


class Chekup_list(models.Model):

    id=models.BigAutoField(primary_key=True)
    patient_id=models.CharField(max_length=20)
    patient_name=models.CharField(max_length=30)
    mobile_no=models.CharField(max_length=20)
    date=models.CharField(max_length=20)
    time=models.CharField(max_length=20)
    status=models.CharField(max_length=20)

    def __str__(self):
        return self.patient_name
    

class Health_issue(models.Model):

    id=models.BigAutoField(primary_key=True)
    patient_id=models.CharField(max_length=20)
    patient_name=models.CharField(max_length=30)
    mobile_no=models.CharField(max_length=40)
    date=models.CharField(max_length=20)
    health_issue=models.CharField(max_length=20)
    issue_rate=models.CharField(max_length=20)
    Bp=models.CharField(max_length=20)
    sugar=models.CharField(max_length=20)
    condition=models.CharField(max_length=20)

    def __str__(self):
        return self.patient_name

class Patient_register(models.Model):

    id=models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=50)
    mobile_no=models.CharField(max_length=50)
    email_id=models.EmailField(max_length=40)
    gender=models.CharField(max_length=50)
    blood_group=models.CharField(max_length=50)
    age=models.CharField(max_length=50)
    country=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
    district=models.CharField(max_length=50)
    town=models.CharField(max_length=50)
    register_date=models.DateTimeField(auto_now_add=True)
    password=models.CharField(max_length=50)

    def __str__(self) :
       return self.name
    

class Medical_records(models.Model):

    id=models.BigAutoField(primary_key=True)
    patient_name =models.CharField(max_length=50)
    patient_id=models.CharField(max_length=50)
    date = models.CharField(max_length=20)
    medicine_name=models.CharField(max_length=50)
    noon =models.CharField(max_length=20)
    time=models.CharField(max_length=20)
    dose=models.CharField(max_length=20)
 
    def __str__(self) :
       return self.patient_name



class Doctor_register(models.Model):

    id=models.BigAutoField(primary_key=True)
    Doctor_name=models.CharField(max_length=50)
    Doctor_mobile_no=models.CharField(max_length=50)
    Doctor_email_id=models.EmailField(max_length=40)
    Doctor_gender=models.CharField(max_length=50)
    Doctor_blood_group=models.CharField(max_length=50)
    Doctor_Qualification=models.CharField(max_length=50)
    Doctor_specialist=models.CharField(max_length=50)
    Doctor_age=models.CharField(max_length=50)
    Doctor_country=models.CharField(max_length=50)
    Doctor_state=models.CharField(max_length=50)
    Doctor_district=models.CharField(max_length=50)
    Doctor_town=models.CharField(max_length=50)
    Doctor_register_date=models.DateTimeField(auto_now_add=True)
    Doctor_password=models.CharField(max_length=50)

    def __str__(self) :
       return self.Doctor_name
    


