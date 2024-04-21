from django.contrib import admin
from base.models import Patient_register
from base.models import Doctor_register
from base.models import Medical_records
from base.models import Health_issue
from base.models import Chekup_list
from base.models import Appointment_list

# Register your models here.

admin.site.register(Patient_register)
admin.site.register(Doctor_register)
admin.site.register(Medical_records)
admin.site.register(Health_issue)
admin.site.register(Chekup_list)
admin.site.register(Appointment_list)
