const express = require("express");
const UserRouter = require("./routes/user.js")
const {ConnectMongoDB} = require("./Connection.js")





const app = express();
const PORT = 4000;

//connection
ConnectMongoDB("mongodb://localhost:27017/loginPage").then(()=>console.log("MongoDb connected"))

//middleware
app.use(express.urlencoded({extended: false}));

//routes
app.use("/login",UserRouter);


app.listen(PORT,()=>console.log(`server is started on PORT ${PORT}`))
