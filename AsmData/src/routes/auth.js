import { Router } from "express";
import {signin, signup} from '../controllers/auth'
import {listuser, removeuser, updateuser } from '../controllers/userjs'

const router = Router();
//dùng router để tạo các phương thức
router.post("/signup", signup);
router.post("/signin", signin);


router.get("/users",  listuser);
router.delete("/users/:id", removeuser);
router.put("/users/:id", updateuser);


export default router;