import {Router} from "express"
import { create ,list} from "../controllers/orderDetail";
const router = Router(); 
//dùng router để tạo các phương thức
router.post("/orderdetail",create);
router.get("/orderdetail/:id",list);

export default router