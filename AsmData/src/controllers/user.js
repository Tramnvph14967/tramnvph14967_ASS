import User from '../models/user';

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        //hàm findById được sử dụng để tìm một tài liệu theo trường Id.
        if(!user){
            return res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        req.profile.salt = undefined;

        next();

    } catch (error) {
        console.log(error)
    }
}

