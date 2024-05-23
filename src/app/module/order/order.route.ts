import express from "express";
import { orderController } from "./order.controller";

const router = express.Router()
router.post('/',orderController.createProductOrder);

router.get('/', (req, res) => {
    const email = req.query.email as string;
    if (email) {
        return orderController.getOrdersByEmail(req, res);
    } else {
        return orderController.getallProductOrders(req, res);
    }
});
export const orderRoutes = router;

