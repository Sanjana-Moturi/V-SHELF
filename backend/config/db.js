import mongoose from "mongoose";
export const connectDB=  async () => {
    await mongoose.connect('mongodb+srv://sanjanamoturi:sanju2475@cluster0.2u9n2.mongodb.net/V-shelf').then(()=>console.log("DB Connected"));
}