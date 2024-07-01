import { Request, Response } from "express";
import { OrderService } from "./order.service";

// post a order
const createProductOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body
        const result = await OrderService.createProductOrderIntoBb(orderData)
        await result.save();
        res.status(200).json({
            success: true,
            message: 'order is created successfully',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the order.',

        });
    }
}
// get all order
const getallProductOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getAllorders()
        res.status(200).json({
            success: true,
            message: 'product are recive successfully',
            data: result
        })
    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });

    }
}

// get order by userEmail
const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        const result = await OrderService.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export const orderController = {
    createProductOrder,
    getallProductOrders,
    getOrdersByEmail
}