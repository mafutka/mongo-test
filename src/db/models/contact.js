import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,

}, {
    timestamps: true,
});

export const StudentsCollection = mongoose.model('student', studentSchema)