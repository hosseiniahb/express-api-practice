const express = require("express");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(express.json());

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/blog")
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    })
