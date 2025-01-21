const settingModel = require("./invoiceSettingModel")

exports.getInvoiceSetting=async(req,res)=>{
    const setting=await settingModel.find();
    if(!setting){
        res.status(404).json({
            message:false,
            message:"Not found"
        })
    }

    res.status(200).json({
        success:true,
        setting
    })
}
exports.setInvoiceSetting=async(req,res)=>{
    try{
       const setting= await settingModel.create(req.body);
        res.status(201).json({
            success:true,
            setting
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            err
        })
    }
}

exports.editInvoiceSetting=async(req,res)=>{
    let setting=settingModel.findById(req.params.id);
    if(!setting){
        res.status(404).json({
            success:false,
            message:"Not found"
        });

    }

    setting=await settingModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        validator:true
    });
    res.status(200).json({
        success:true,
        setting
    });
}