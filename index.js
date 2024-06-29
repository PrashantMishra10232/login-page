const express = require("express");
const UserRouter = require("./routes/user")
const {ConnectMongoDB} = require("./Connection")


//connection
ConnectMongoDB("mongodb://localhost:27017/loginPage").then(()=>console.log("MongoDb connected"))


const app = express();
const PORT = 4000;


//routes
app.use("/login",UserRouter);

//middleware
app.use(express.urlencoded({extended: false}));

app.listen(PORT,()=>console.log(`server is started on PORT ${PORT}`))
