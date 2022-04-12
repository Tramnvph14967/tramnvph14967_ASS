// const express = require("express");
import express from 'express';
import morgan from "morgan";


import productRouter from './routes/product';
import categoryRouter from './routes/category';
import authRouter from './routes/auth'
import userRouter from "./routes/auth";
import orderDetailRouter from "./routes/orderDetail";
import orderRouter from "./routes/order";




import mongoose from 'mongoose';
import cors from 'cors';





const app = express(); // khởi tạo ap bằng express


// middleware - 
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));



// Routing 
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api",orderDetailRouter)
app.use("/api",orderRouter)


// kết nối với data
mongoose.connect("mongodb://127.0.0.1:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))


const PORT = 8000; //chạy cổng
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});

