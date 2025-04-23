exports.sample=(req,res)=>{
    res.send(`my name is  ${process.env.PORT}`);
    };
exports.getTest=(req,res)=>{
    res.send(`Test Name`);
    };
