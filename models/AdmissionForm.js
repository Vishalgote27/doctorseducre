const mongoose = require('mongoose');

const admissionFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  currentSchool: { type: String, required: true },
  grade: { type: String, required: true },
  interestedIn: { type: String, required: true },
  additionalInfo: { type: String },
});

const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);

module.exports = AdmissionForm;
