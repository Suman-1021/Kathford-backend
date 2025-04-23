const Category = require("../model/CategoryModel");
exports.addcategory = async (req, res) => {
  try{ category= await Category.findOne({category_name:req.body.category_name});
  if(!category)
  {
    let categoryadd = new Category({
      category_name: req.body.category_name,
    });
    categoryadd = await categoryadd.save();
    res.send(categoryadd);
  }
  else{
    res.status(201).json({error:"category already exists"});
  }
  
}catch(err){
  return res.status(400).json({error:err.message,detail:"category not found"})
}
 
  //  res.status(200).json(categoryadd);
};
exports.getcategory=async(req,res)=>{
try{let category= await Category.find();
  if(!category){
      res.status(404)
  .json({errror:" no category found "});
  }
  res.send(category);}
  catch(err)
  {return res.status(400).json({error:err.message,detail:"category not found"})}
};
exports.getcategoryById=async(req,res)=>{
  try{let category=await Category.findById(req.params.id);
    if(!category){
      return res.status(404).json({error:"no category found"});
    
    }
    res.send(category); }
    catch(err)
    { return res.status(400).json({error:err.message,detail:"category not found"})}

};
exports.updateCategory=async(req,res)=>{
  try{let category= await Category.findByIdAndUpdate(req.params.id,{category_name:req.body.category_name},{new: true});
  if(!category){
   return res.status(400).json({ error:"not found"});
  }
  return res.status(200).json({ category, success:"updated"});}
  catch(err)
  {return res.status(400).json({error:err.message,detail:"category not found"})}
  
};
exports.deleteCategory=async(req,res)=>{
  try{let category= await Category.findByIdAndDelete(req.params.id,{category_name:req.body.category_name});
  if(!category){
   return res.status(400).json({ error:"not found"});
  }
  return res.status(200).json({ category, success:"deleted"});}
  catch(err)
  {return res.status(400).json({error:err.message,detail:"category not found"})}
  
};
exports.testCategory=async(req,res)=>{
  try{let category= await Category.findByIdAndDelete(req.params.id,{category_name:req.body.category_name});
  if(!category){
   return res.status(400).json({ error:"not found"});
  }
  return res.status(200).json({ category, success:"deleted"});}
  catch(err)
  {return res.status(400).json({error:err.message,detail:"category not found"})}
  
};


//filter pass garda query bata pass
//req.body
//req.param// url bata auney kura 
//req.query
//async:
//await:
     