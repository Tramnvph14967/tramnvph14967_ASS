import { Router } from 'express';
import { create, get, list,  remove, update, getAll } from '../controllers/product';
// import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';
import {userById} from '../controllers/user';
const router = Router();

//dùng router để tạo các phương thức

router.get("/products",  list);
router.get("/product/:id",get);
router.post('/products', create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);
router.get("/products",getAll);



router.param("userId", userById)


export default router;

