import {Router} from "express"
import { create, list, read, update } from "../controllers/order";
const router = Router();
//dùng router để tạo các phương thức
router.post("/orders",create);
router.get("/orders",list);
router.put("/order/:id",update);
router.get("/orders/:username",read)
export default router