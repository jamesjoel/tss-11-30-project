import Product from "../models/Product.js";
import Category from '../models/Category.js'
import SubCate from '../models/SubCategory.js'
import Path from 'path'
import { UniqueString } from 'unique-string-generator'

let SaveProduct = async(req, res)=>{
    
    let uniqueName = UniqueString();
    let image = req.files.image;
    let imagename = image.name; // 1.hello.test.10.jpg

    
    let extArr = imagename.split(".");
    let ext = extArr[extArr.length-1];
    let newname = uniqueName+"."+ext;

    req.body.image =  newname// ODgyXzE2Nzk1MDQyMDcxNDZfNDkx.jpg

    // Path.resolve()
    let upload_path = Path.resolve()+"/assets/product_images/"+newname;

    image.mv(upload_path, (err)=>{
        console.log("***********");
    });

    let result = await Product.create(req.body);
    res.send({success:true, result});
}
let GetAllProduct = async(req, res)=>{
    let result = await Product.find();
    res.send({success:true, result});
}
let GetByIdProduct = async(req, res)=>{

    let result = await Product.find({_id : req.params.id}).populate("cate_id").populate("sub_cate_id").exec();
    res.send({success:true, result:result[0]});
}
let UpdateProduct = async(req, res)=>{
    let result = await Product.updateMany({_id : req.params.id}, req.body);
    res.send({success:true, result});
}
let DeleteProduct = async(req, res)=>{
    let result = await Product.deleteMany({_id : req.params.id});
    res.send({success:true, result});
}
let DeleteAll = async(req, res)=>{
    await Product.deleteMany();
    res.send("data deleted")
}

let GetAllProCateSubCate = async(req, res)=>{
    
    let catename = req.params.cate; // bags
    let cateresult = await Category.find({title : catename});
    let cateid = cateresult[0]._id;

    if(req.params.subcate){
        let subcatename = req.params.subcate;
        let subcateresult = await SubCate.find({title : subcatename});
        let subcateid = subcateresult[0]._id;

        let result = await Product.find({$and : [{cate_id : cateid}, {sub_cate_id : subcateid}]});
        res.send({success:true, result})
        
    }else{
        let result = await Product.find({cate_id : cateid});
        res.send({success:true, result})
    }
}


export {SaveProduct, DeleteAll, GetAllProCateSubCate, UpdateProduct, DeleteProduct, GetAllProduct, GetByIdProduct}

