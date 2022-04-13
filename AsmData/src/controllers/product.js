import Product from '../models/product'
import slugify from 'slugify';

export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
    try {
        const product = await new Product(req.body).save()
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}

export const list = async (req, res) => { // get all
    // const limitNumber = 20
    // const limit = req.query.limit ? + req.query.limit : limitNumber;
    // const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // const order = req.query.order ? req.query.order : 'desc';
    try {
        // const products = await Product.find().limit(limit).exec();
        const products = await Product.find().exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }

export const remove = async (req, res) => { // delete product
    try {
        const products = await Product.findOneAndDelete({_id: req.params.id }).exec();
        res.json(products);    
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
        const product = await Product.findOneAndUpdate(condition,update,optional).exec();
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Update Sản phẩm không thành công"
        })
    }
}

export const get = async (req, res) => { // get a product
    const condistion = { _id: req.params.id }
    try {
        const product = await Product.findOne(condistion).exec();
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không tìm được sản phẩm"
        })
    }
}

export const getAll = async (req, res) => { //tim kiem
    const { name, price, page, _limit } = req.query //khai báo
    if (name || price || (page && _limit)) { // kiểm tra
        console.log("abc");
        const { name } = req.query; //nhận giữ liệu name từ client
        const { price } = req.query; //nhận giữ liệu price từ client

        if (name) { //kiểm tra name
            try { //Nếu
                const products = await Product.find({ name: new RegExp(name, 'i') }).exec(); // kiểm tra xem name có hợp lệ không - regexp là hàm sử lý chuỗi
                res.status(200).json(products) // trả về kết quả hợp lệ và báo 200
            } catch (error) { //ngược lại báo lỗi
                res.status(401).json({
                    message: "Lỗi , không lấy được sản phẩm"
                })
            }
        }

        if (price) { //kiểm tra price
            try { //nếu
                const products = await Product.find({ price: { $gt: price } }).exec(); // kiểm tra xem có các giá trị price nào lớn hơn price nhận được từ phía client - $gt: kiểm tra lớn hơn
                res.status(200).json(products) // trả về kết quả hợp lệ và thông báo 200
            } catch (error) { // ngược lại thì báo lỗi
                res.status(401).json({
                    message: "Lỗi , không lấy được sản phẩm"
                })
            }
        }
        
    } else { //ngược lại
        try {
            const products = await Product.find().exec(); // trả về tất cả giữ liệu
            res.status(200).json(products)
        } catch (error) {
            res.status(401).json({
                message: "Lỗi , không lấy được sản phẩm"
            })
        }
    }
}