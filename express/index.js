const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {
        id: 1,
        name: "John",
        age: 20
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


/*
app.get("/", (req, res)=>{
    res.send("Hellow")
});


app.post("/", (req, res)=>{
    res.send("Hellow")
});

app.put("/test", (req, res)=>{
    res.send("Hellow World")
});


app.delete("/test", (req, res)=>{
    res.send("Hellow World")
});

*/


// add users //insert
app.post("/users", (req, res) => {
    // Req Body: all the information which we want to send from client to server, will be gone throough the req body
    console.log(req.body);
    let newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send({
        message: "User added successfully"
    })
})


// get users // find
app.get("/users", (req, res) => {
    console.log("Requested users");
    res.send({
        message: "Users fetched successfully",
        data: users
    });
})

// Get One User by ID
//       /users/3 , findone
app.get("/users/:id", (req, res) => {
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
})

// Update User
app.put("/users/:id", (req, res) => {
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
})

// Delete User
app.delete("/users/:id", (req, res) => {
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
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})