exports.sample=(req,res)=>{
    res.send(`we are in ${process.env.PORT}`);
    };
exports.getTest=(req,res)=>{
    res.send(`Test Name`);
    };
