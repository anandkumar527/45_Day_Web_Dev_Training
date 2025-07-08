import mongoose from "mongoose";
import { Schema ,model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin','User'],
        default: "User"
    },
},
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);
export { User };