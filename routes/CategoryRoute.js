const express=require("express");


const { addcategory, getcategory, getcategoryById, updateCategory, deleteCategory } = require("../controller/CategoryController");
const router=express.Router();
 router.post('/categoryadd',addcategory);
 router.get("/",getcategory);
 router.get("/:id",getcategoryById);
 router.put("/updatecategory/:id",updateCategory);
 router.delete("/deletecategory/:id",deleteCategory);
 module.exports= router;
