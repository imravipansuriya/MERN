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

    getAllUsers: (req, res) => {
        console.log("Requested users");
        res.send({
            message: "Users fetched successfully",
            data: users
        });
    },

    getOneUser: (req, res) => {
        console.log("Requested user by id");
        let id = req.params.id;
        let user = users.find(user => user.id == id);
        if (user) {
            res.send({
                message: "User fetched successfully",
                data: user
            });
        } else {
            res.send({
                message: "User not found"
            });
        }
    },

    addUser: (req, res) => {
        console.log(req.body);
        let newUser = req.body;
        newUser.id = users.length + 1;
        users.push(newUser);
        res.send({
            message: "User added successfully"
        })
    },

    updateUser: (req, res) => {
        console.log("Requested user by id");
        let id = req.params.id;
        let user = users.find(user => user.id == id);
        if (user) {
            user.name = req.body.name;
            user.age = req.body.age;
            res.send({
                message: "User updated successfully",
                data: user
            });
        } else {
            res.send({
                message: "User not found"
            });
        }
    },

    deleteUser: (req, res) => {
        console.log("Requested user by id");
        let id = req.params.id;
        let user = users.find(user => user.id == id);
        if (user) {
            let index = users.indexOf(user);
            users.splice(index, 1);
            res.send({
                message: "User deleted successfully"
            });
        } else {
            res.send({
                message: "User not found"
            });
        }
    }
};

module.exports = userController;