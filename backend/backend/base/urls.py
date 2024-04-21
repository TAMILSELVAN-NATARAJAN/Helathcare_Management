from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from  base.views import Patientlistviewset
from  base.views import Doctorlistviewset
from  base.views import Medical_recordsviewset
from  base.views import Health_issueviewset
from  base.views import Checkup_listviewset
from  base.views import Appiontment_listviewset


router=routers.DefaultRouter()
router.register('Patient_register',Patientlistviewset)
router.register('Doctor_register',Doctorlistviewset)
router.register('Medical_records',Medical_recordsviewset)
router.register('Helath_issue',Health_issueviewset)
router.register('Checkup_list',Checkup_listviewset)
router.register('Appointment_list',Appiontment_listviewset)


urlpatterns = [
    
    path('', include(router.urls)),
]
