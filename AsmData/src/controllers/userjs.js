import User from '../models/user'
import slugify from 'slugify';



export const listuser = async (req, res) => { // get all
    // /product?limit=4
    // /product?sortBy=name&order=asc
    const limitNumber = 20
    const limit = req.query.limit ? +req.query.limit : limitNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const order = req.query.order ? req.query.order : 'desc';

    try {
        const users = await User.find().limit(limit).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }



export const removeuser = async (req, res) => { // delete product
    try {
        const users = await User.findOneAndDelete({_id: req.params.id }).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}

export const updateuser = async (req, res) => { // update product
    const condition = {_id: req.params.id }; 
    const update = req.body;
    const optional = { new : true}
    try {
        const users = await User.findOneAndUpdate(condition,update,optional).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Update Sản phẩm không thành công"
        })
    }
}

export const get = async (req, res) => { // get a product
    const condistion = { _id: req.params.id }
    try {
        const users = await User.findOne(condistion).exec();
        res.status(200).json(users)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không tìm được sản phẩm"
        })
    }
}

