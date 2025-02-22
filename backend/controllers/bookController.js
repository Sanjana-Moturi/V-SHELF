import bookModel from "../models/bookModel.js";
import fs from 'fs'


//add book item
const addBook = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const book = new bookModel({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
        category: req.body.category,
        image: image_filename
    })
    try {
        await book.save();
        res.json({success: true, message: "Book Added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}
export { addBook }