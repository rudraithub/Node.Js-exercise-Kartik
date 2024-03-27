const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        Validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        require: true

    }

}
)

// create new model or collections

const Student = new mongoose.model("Student", studentSchema)

module.exports = Student;