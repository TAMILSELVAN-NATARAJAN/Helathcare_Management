from django.shortcuts import render
from rest_framework import viewsets
from base.models import Patient_register
from base.models import Doctor_register
from base.models import Medical_records
from base.models import Health_issue
from base.models import Chekup_list
from base.models import Appointment_list

from base.serializers import PatientListserializers
from base.serializers import DoctorListserializers
from base.serializers import Medical_recordsserializers
from base.serializers import Helath_issueserializers
from base.serializers import Chekup_listserializers
from base.serializers import Appointment_listserializers

# Create your views here.

class Appiontment_listviewset(viewsets.ModelViewSet):
    queryset=Appointment_list.objects.all()
    serializer_class=Appointment_listserializers


class Checkup_listviewset(viewsets.ModelViewSet):
    queryset=Chekup_list.objects.all()
    serializer_class=Chekup_listserializers

class Health_issueviewset(viewsets.ModelViewSet):
    queryset=Health_issue.objects.all()
    serializer_class=Helath_issueserializers

class Patientlistviewset(viewsets.ModelViewSet):
    queryset=Patient_register.objects.all()
    serializer_class=PatientListserializers


class Doctorlistviewset(viewsets.ModelViewSet):
    queryset=Doctor_register.objects.all()
    serializer_class=DoctorListserializers

class Medical_recordsviewset(viewsets.ModelViewSet):
    queryset=Medical_records.objects.all()
    serializer_class=Medical_recordsserializers                                          