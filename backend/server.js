import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"
//app config
const app=express()
const port=4000

//middleward
app.use(express.json())
app.use(cors())

//db connection
connectDB();
//api endpoints
app.use("/api/book",bookRouter)
app.use("/images",express.static('uploads'))

app.post("/api/book/add", (req, res) => {
    res.json({ message: "Book item added successfully!" });
});

app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
