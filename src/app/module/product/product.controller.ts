import { Request, Response } from "express"
import { ProductService } from "./product.service"



const createProduct = async (req: Request, res: Response) => {

    try {
        const  productData = req.body.product
        const result = await ProductService.createProductIntoBb(productData)
        await result.save();
        res.status(200).json({
            success: true,
            message: 'procuct is created successfully',
            data: result
        })
    } catch (err) {
        console.log(err);
    }

}

export const ProductController = {
    createProduct
}