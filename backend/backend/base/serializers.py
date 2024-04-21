from rest_framework import serializers
from base.models import Patient_register
from base.models import Doctor_register
from base.models import Medical_records
from base.models import Health_issue
from base.models import Chekup_list
from base.models import Appointment_list


class PatientListserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Patient_register
        fields=['id','name','mobile_no','email_id','gender','blood_group','age','country','state','district','town','password']
      
       
class DoctorListserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Doctor_register
        fields=['id','Doctor_name','Doctor_mobile_no','Doctor_email_id','Doctor_gender','Doctor_blood_group','Doctor_Qualification','Doctor_specialist','Doctor_age','Doctor_country','Doctor_state','Doctor_district','Doctor_town','Doctor_password']
      
class Medical_recordsserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Medical_records
        fields=['id','patient_id','patient_name','date','medicine_name','noon','time','dose']
      
class Helath_issueserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Health_issue
        fields=['id','patient_id','patient_name','mobile_no','date','health_issue','issue_rate','Bp','sugar','condition']
      
class Chekup_listserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Chekup_list
        fields=['id','patient_id','patient_name','mobile_no','date','time','status']
      
class Appointment_listserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Appointment_list
        fields=['id','patient_id','patient_name','email_id','mobile_no','al_mobile_no','doctor_name','Symtoms','location','date','time','status']
      
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        # fields='__all__'

        # fields=['patient_id','name','mobile_no','email_id','gender','blood_group','age','country','state','district','town']