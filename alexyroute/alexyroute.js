const express=require('express');
const { sample, getTest } = require('./alexycontroller/alexycontroller');
const router =express();

router.get("/alexy",sample);
router.get("/test",getTest);
    module.exports=router;
