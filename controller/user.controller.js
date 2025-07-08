import { User } from "../model/user.model.js";

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, mobile } = req.body;
        const newUser = await User.create({
            username: firstName + lastName,
            email,
            password,
            mobile,
        });

        const userData = await newUser.save();
        console.log(userData);
        res.status(200).json({
            data: userData,
            message: "User register successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

const getAllUser = async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json({
            data: userData,
            message: "User data get successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

const userDelete = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        const userData = await User.findById({ _id: Object(id) });
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ data: null, message: "User does't exists", status: false });
        }
        const userDel = await User.deleteOne({ _id: Object(id) });
        res.status(200).json({
            data: userDel,
            message: "User deleted successfully",
            status: true,
        });
    } catch (err) {
        res
            .status(500)
            .json({ data: null, message: err.message, status: false });
    }
};

export { register, getAllUser, userDelete };