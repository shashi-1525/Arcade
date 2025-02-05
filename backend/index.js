import express from "express";
import dotenv from "dotenv";
import { mongoDB } from "./config/mongo.js";
import signupRouter from "./routes/auth.js";
import signinRouter from "./routes/auth.js";
import signoutRouter from "./routes/auth.js";

import adduserRouter from "./routes/user.js";
import getuserRouter from "./routes/user.js";
import updateuserRouter from "./routes/user.js";
import deluserRouter from "./routes/user.js";
import searchuserRouter from "./routes/user.js";
import adddeviceRouter from "./routes/device.js";
import getdeviceRouter from "./routes/device.js";
import updatedeviceRouter from "./routes/device.js";
import deldeviceRouter from "./routes/device.js";
import searchdeviceRouter from "./routes/device.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
await mongoDB();

app.use("/arcade/auth",signupRouter)
app.use("/arcade/auth",signinRouter);
app.use("/arcade/auth",signoutRouter)

app.use("/arcade/user",adduserRouter);
app.use("/arcade/user",getuserRouter);
app.use("/arcade/user",updateuserRouter);
app.use("/arcade/user",deluserRouter);
app.use("/arcade/user",searchuserRouter);

app.use("/arcade/device",adddeviceRouter);
app.use("/arcade/device",getdeviceRouter);
app.use("/arcade/device",updatedeviceRouter);
app.use("/arcade/device",deldeviceRouter);
app.use("/arcade/device",searchdeviceRouter);


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!!";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})