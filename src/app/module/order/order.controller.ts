import { Request, Response } from "express";
import { OrderService } from "./order.service";


const createProductOrder = async (req: Request, res: Response) => {
    try {
        const  orderData = req.body.order
        const result = await OrderService.createProductOrderIntoBb(orderData)
        await result.save();
        res.status(200).json({
            success: true,
            message: 'order is created successfully',
            data: result
        })
    } catch (err) {
        console.log(err);
    }
}

export const orderController = {
    createProductOrder,
}