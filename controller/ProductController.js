const Product = require("../model/ProductModel");
const Category=require("../model/CategoryModel");

exports.addProduct = async (req, res) => {
    try {

        let product = new Product({
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            image: req.body.image,
            category: req.body.category
        });

        product = await product.save();
        if (!product) {
            return res.status(400).json({ message: "Invalid product data" })
        }
        return res.send(product);

    }
    catch (err) {
        return res.status(400).json({ message: err.message, detail: "Product Not Added" })
    }
}

exports.getProduct = async (req, res) => {
    let product = await Product.find().populate("category","category_name")
    if (!product) {
        res.status(404).json({ error: "No product found" })
    }
    res.send(product)
}

exports.getProductById = async (req, res) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        res.status(404).json({ error: "No product found" })
    }
    res.send(product)
}

exports.updateProduct = async (req, res) => {
    let product = await Product.findByIdAndUpdate(req.params.id, { product_name: req.body.product_name }, { new: true })
    if (!product) {
        res.status(400).json({ error: "Product not found." })
    }
    res.status(200).json({ product, success: "Product updated" })
}

exports.deleteProduct = async (req, res) => {
    let product = await Product.findByIdAndDelete(req.params.id)
    if (!product) {
        res.status(404).json({ error: "No product found" })
    }
    res.status(200).json({ product, success: "Product Deleted Successfully!"})
}
exports.  getProductByCategoryId=async(req,res)=>{
    try{let category=await Category.findById(req.params.id)
        if(!category)
        {return res.status(404).json({message:"category not found "})
        }
        let product=await Product.find({category: req.params.id}).populate("category","category_name");
    if(!product){
        return res.status(404).json({message:"category not found "}) 
    }
    res.send(product);
    } catch(err){return res.status(400).json({err:err.message,detail:"category not found"})}


}