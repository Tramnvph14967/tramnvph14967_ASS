import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    //khai báo
    const { email, name, password, address, surname} = req.body;
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({email}).exec(); //findone trả về một giữ liệu
        //Nếu user tồn tại
        if(existUser){
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        //nếu user không tồn tại thì add giữ liệu
        const user = await new User({email, name, password, address, surname}).save();
        res.json({
            //trả về thằng user với các trường id, email, name
            user: {
                _id: user._id,
                email: user.email,
                surname: user.surname,
                name: user.name,
                address: user.address
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
     //khai báo nhận giữ liệu từ client
    const { email, password} = req.body;
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


