const userModel = require("../schema/user.schema");

let users = [
    {
        id: 1,
        name: "John",
        age: 20,
        address: {},
        hobbies: ["cricket", "football"]
    },
    {
        id: 2,
        name: "Jane",
        age: 21
    },
    {
        id: 3,
        name: "Jack",
        age: 22
    }
]

const userController = {

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find({});
            return res.status(200).json({ message: "Users", data: users });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "Error in getting users"
            })
        }
    },

    getOneUser: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);   
            // const user = await userModel.findOne({
            //     _id: req.params.id,
            //     is_deleted: false
            // })
            return res.status(200).json({ message: "User", data: user });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "Error in getting user"
            })
        }
    },

    // a wait
    // 
    addUser: async (req, res) => {
        console.log(req.body);
        let newUser = req.body;

        try {

            // Method 1
            const val = await userModel.create({
                name: newUser.name,
                age: newUser.age,
                email: newUser.email,
            })

            // Method 2
            // const val = new userModel({
            //     name: newUser.name,
            //     age: newUser.age,
            //     email: newUser.email,
            // })

            // await val.save();

            console.log(val);
            return res.status(200).send({
                message: "User added successfully",
                data: val
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "User not added",
                error: err
            });
        }
    },

    updateUser: async (req, res) => {
        try {
            // const updatedUser = await userModel.updateOne({
            //     _id: req.params.id
            // }, {
            //     $set: {
            //         name: req.body.name,
            //         age: req.body.age,
            //         email: req.body.email,
            //     }
            // })

            // const user = await userModel.findById(req.params.id);
            // user.name = req.body.name;
            // user.age = req.body.age;
            // user.email = req.body.email;
            // await user.save();

            await userModel.findByIdAndUpdate(req.params.id, {
                $set: {
                    name: req.body.name,
                    age: req.body.age,
                    email: req.body.email,
                }
            })

            return res.status(200).json({ message: "User updated successfully" });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "Error in updating user"
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            // const deletedUser = await userModel.deleteOne({
            //     _id: req.params.id
            // })

            await userModel.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                message: "Error in deleting user"
            })
        }
    }
};

module.exports = userController;