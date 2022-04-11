import Order from "../models/order";
import OrderDetail from "../models/orderDetail";

export const create = async (req, res) => {
    const {username, name, phone, address, notes,total } = req.body; //khai báo, Nhận dữ liệu từ client gưi lên
    let numberphone = +phone
    try {
        const order = await new Order({ username,name, phone: numberphone, address, notes,total }).save(); //Chờ order chạy xong và lưu lại
        res.status(200).json(order) //thành công
    } catch (error) { //ngược lại thì báo lỗi
        res.status(400).json({
            message: "Lỗi đặt đơn hàng"
        })
    }
};
export const list = async(req,res) =>{ 
    const {username} = req.query //Nhận user từ client 
    if (username) { //Nếu tồn tại user
        try {
            const orders = await Order.find({username: username}).exec(); // chờ kiểm tra lấy giữ liệu
            res.status(200).json(orders) // trả về đơn hàng theo user
        } catch (error) {
            
        }
    } else { //ngược lại
        try {
            const orders = await Order.find().exec();
            res.status(200).json(orders)
        } catch (error) {
            
        }
    }
};
export const read = async (req,res) =>{
    const condistion = {order : req.params.id};
    try {
        const orderDetail = await OrderDetail.find(condistion).exec();
        res.status(200).json(orderDetail)
    } catch (error) {
        res.status(400).json({
            message: "Không đọc được chi tiết đơn hàng"
        })
    }
};
export const update = async (req,res) =>{
    const condistion = req.params.id; // khai báo condistion nhận id trên đường dẫn
    const {status} = req.body;  // khai báo status nhận giữ liệu từ client gửi lên
    try {
        const order = await Order.findByIdAndUpdate(condistion,{status : status}).exec();  // chờ lưu lại
        res.status(200).json(order); // trả về giữ liệu
    } catch (error) { //ngược lại thì báo lỗi
        res.status(400).json({
            message : "Update đơn hàng không thành công"
        })
    }
};