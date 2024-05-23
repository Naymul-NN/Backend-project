import { Request, Response } from "express"
import { ProductService } from "./product.service"


// post product
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

// get all product
const getAllproducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductFromDb()

        res.status(200).json({
            success: true,
            message: 'product are recive successfully',
            data: result
        })

    } catch (error) {
        console.log(error)
    }
}
// get single product

const getSingleproduct = async (req: Request, res: Response) => {
    try {
        const {studentId} = req.params;
        const result = await ProductService.getSingleProductFromDb(studentId)

        res.status(200).json({
            success: true,
            message: 'product are recive successfully',
            data: result
        })

    } catch (error) {
        console.log(error)
    }
}


export const ProductController = {
    createProduct,
    getAllproducts,
    getSingleproduct
}