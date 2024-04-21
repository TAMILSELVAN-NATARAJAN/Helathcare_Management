import axios from 'axios';


export function deletepatient(id) {
  return (
    axios.delete('http://127.0.0.1:8000/Patient_register/' + id)
      .then(res => {
        return res.data
      })
  )
}
export function getpatientlist() {
  return (
    axios.get('http://127.0.0.1:8000/Patient_register/')
      .then(res => {
        return res.data
      })
  )
}



export function viewpatient(pk) {
  return (

    axios.get('http://127.0.0.1:8000/Patient_register/' + pk)
      .then(res => {
        return res.data
      })
  )
}




export function addpatient(patient) {
  console.log(patient);

  return (
    axios.post('http://127.0.0.1:8000/Patient_register/', {

      id: null,
      name: patient.name.value,
      mobile_no: patient.mobile_no.value,
      email_id: patient.email_id.value,
      gender: patient.gender.value,
      blood_group: patient.blood_group.value,
      age: patient.age.value,
      country: patient.country.value,
      state: patient.state.value,
      district: patient.district.value,
      town: patient.town.value,
      password: patient.password.value

    })
      .then(res => {
        // console.log(res.code);

        alert('lickkek')
        return '200'
      })
  )
}
export function editpatient(patient, id) {
  return (
    axios.put('http://127.0.0.1:8000/Patient_register/' + id +'/', {

      id: null,
      name: patient.name.value,
      mobile_no: patient.mobile_no.value,
      email_id: patient.email_id.value,
      gender: patient.gender.value,
      blood_group: patient.blood_group.value,
      age: patient.age.value,
      country: patient.country.value,
      state: patient.state.value,
      district: patient.district.value,
      town: patient.town.value,
      password:patient.password.value

    })
      .then(res => {
       return res


      })
  )
}




//------------------doctor......................

export function adddoctor(doctor) {


  return (
    axios.post('http://127.0.0.1:8000/Doctor_register/', {

      id: null,
      Doctor_name: doctor.name.value,
      Doctor_mobile_no: doctor.mobile_no.value,
      Doctor_email_id: doctor.email_id.value,
      Doctor_gender: doctor.gender.value,
      Doctor_blood_group: doctor.blood_group.value,
      Doctor_Qualification: doctor.qualification.value,
      Doctor_specialist: doctor.specialist.value,
      Doctor_age: doctor.age.value,
      Doctor_country: doctor.country.value,
      Doctor_state: doctor.state.value,
      Doctor_district: doctor.district.value,
      Doctor_town: doctor.town.value,
      Doctor_password: doctor.password.value

    })
      .then(res => {
        // console.log(res.code);
        return '200'
      })
  )
}

//////////////////////////////////////////////////////////
export function editdoctor(doctor,id) {
 

  return (
    axios.put('http://127.0.0.1:8000/Doctor_register/'+id+'/', {

      id: null,
      Doctor_name: doctor.name.value,
      Doctor_mobile_no: doctor.mobile_no.value,
      Doctor_email_id: doctor.email_id.value,
      Doctor_gender: doctor.gender.value,
      Doctor_blood_group: doctor.blood_group.value,
      Doctor_Qualification: doctor.Doctor_Qulification.value,
      Doctor_specialist: doctor.Doctor_specialist.value,
      Doctor_age: doctor.age.value,
      Doctor_country: doctor.country.value,
      Doctor_state: doctor.state.value,
      Doctor_district: doctor.district.value,
      Doctor_town: doctor.town.value,
      Doctor_password: doctor.Doctor_password.value

    })
      .then(res => {
        
        return res
      })
  )
}


export function getdoctorlist() {
  return (
    axios.get('http://127.0.0.1:8000/Doctor_register/')
      .then(res => {
        return res.data
      })
  )
}

export function viewdoctor(id) {
  return (

    axios.get('http://127.0.0.1:8000/Doctor_register/' + id)
      .then(res => {
        return res.data
      })
  )
}
export function Deletedoctor(id) {
  return (

    axios.delete('http://127.0.0.1:8000/Doctor_register/' + id)
      .then(res => {
        return res.data
      })
  )
}



// .........................medical...................


export function get_medicalrecord() {
  return (

    axios.get('http://127.0.0.1:8000/Medical_records/')
      .then(res => {
        return res.data
      })
  )
}
// export function view_medicalrecord() {
//   return (

//     axios.get('http://127.0.0.1:8000/Medical_records/')
//       .then(res => {
//         return res.data
//       })
//   )
// }


// -----------------------------------------------------------------------
export function addmedicalrecord(patient) {

  // var formdata =({id:null,patient_name:patient.patient_id,date :patient.date,medicine_name:patient.medicine_name,noon :patient.noon,time :patient.time,dose:patient.dose})
  return (
    axios.post('http://127.0.0.1:8000/Medical_records/', {

      id: null,
      patient_id: patient.patient_id.value,
      patient_name: patient.name.value,
      date: patient.date.value,
      medicine_name: patient.medicine_name.value,
      noon: patient.noon.value,
      time: patient.time.value,
      dose: patient.dose.value

    }).then(res => {
      console.log(res);
      return '200'
    })
  )
}


export function add_healthissue(patient) {

  return (

    axios.post('http://127.0.0.1:8000/Helath_issue/', {

      id: null,
      patient_id: patient.patient_id.value,
      patient_name: patient.name.value,
      mobile_no: patient.mobile_no.value,
      date: patient.date.value,
      health_issue: patient.health_issue.value,
      issue_rate: patient.issue_rate.value,
      Bp: patient.Bp.value,
      sugar: patient.sugar.value,
      condition: patient.condition.value




    }).then(res => {
      return '200'

    })


  )
}

export function get_helathissue() {

  return (
    axios.get('http://127.0.0.1:8000/Helath_issue/',)
      .then(res => {
        return res.data

      })
  )
}

export function add_checkup_detail(patient) {

  return (

    axios.post('http://127.0.0.1:8000/Checkup_list/', {

      id: null,
      patient_id: patient.patient_id.value,
      patient_name: patient.name.value,
      mobile_no: patient.mobile_no.value,
      date: patient.date.value,
      time: patient.time.value,
      status: patient.status.value




    }).then(res => {
      return "200"

    })

  )
}

export function view_chekup_detail() {
  return (
    axios.get('http://127.0.0.1:8000/Checkup_list/')
      .then(res => {
        return res.data
      })
  )
}

export function Bookappointment(patient) {

  return (
    axios.post('http://127.0.0.1:8000/Appointment_list/', {

      id: null,
      patient_id: patient.patient_id.value,
      patient_name: patient.name.value,
      email_id: patient.email_id.value,
      mobile_no: patient.mobile_no.value,
      al_mobile_no: patient.al_mobile_no.value,
      doctor_name: patient.doctor_name.value,
      Symtoms: patient.symtoms.value,
      location: patient.location.value,
      date: patient.date.value,
      time: patient.time.value,
      status: "Pending"

    })
      .then(res => {
        return "200"
      })
  )

}


export function get_appointment(){


  return(
    axios.get('http://127.0.0.1:8000/Appointment_list/')
    .then(res=>{
      return res.data
    })
  )
}
export function Delete_appointment(id){


  return(
    axios.delete('http://127.0.0.1:8000/Appointment_list/'+id)
    .then(res=>{
      return res.data
    })
  )
}



export function agree_appointment(id,patient) {
  console.log(patient);

  return (
    axios.put('http://127.0.0.1:8000/Appointment_list/'+id+'/', {

    
    patient_id: patient.patient_id,
    patient_name: patient.patient_name,
    email_id: patient.email_id,
    mobile_no: patient.mobile_no,
    al_mobile_no: patient.al_mobile_no,
    doctor_name: patient.doctor_name,
    Symtoms: patient.Symtoms,
    location: patient.location,
    date: patient.date,
    time: patient.time,
    status:"Confrim"

    })
      .then(res => {
       return res
      })
  )

}