import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain At Least 3 Character!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide A Valid Email! "],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must Contain 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain 10 Digits!"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Rejected", "Accepted"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
