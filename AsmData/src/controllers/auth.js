import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    //khai báo
    const { email, name, password} = req.body;
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({email}).exec();
        //Nếu user tồn tại
        if(existUser){
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        //nếu user không tồn tại thì add giữ liệu
        const user = await new User({email, name, password}).save();
        res.json({
            //trả về thằng user với các trường id, email, name
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    //khai báo
    const { email, password} = req.body;
    //Kiểm tra user có tồn tại hay không
    const user = await User.findOne({email}).exec();
    //nếu user không tồn tại thì báo message
    if(!user){
        return res.status(400).json({
            message: "User khong ton tai"
        })
    }
    //Nếu passwword không đúng thì thông báo message
    if(!user.authenticate(password)){
        return res.status(400).json({
            message: "Mat khau khong dung"
        })
    }
    // mã hóa mật khẩu
    const token = jwt.sign({_id: user._id}, "123456", { expiresIn: 60 * 60 }); 
    // trả về giữ liệu
    return res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}
export const list = async (req, res) => { // get all

    const limitNumber = 20
    const limit = req.query.limit ? +req.query.limit : limitNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const order = req.query.order ? req.query.order : 'desc';

    try {
        const users = await user.find().limit(limit).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }
export const remove = async (req, res) => { // delete product
    try {
        const users = await user.findOneAndDelete({_id: req.params.id }).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}
export const update = async (req, res) => { // update product
    const condition = {_id: req.params.id }; 
    const update = req.body;
    const optional = { new : true}
    try {
        const users = await user.findOneAndUpdate(condition,update,optional).exec();
        res.json(users);    
    } catch (error) {
        res.status(400).json({
            message: "Update Sản phẩm không thành công"
        })
    }
}