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
// updata single porduct
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = await ProductService.updateProductInDb(productId, updateData);
        res.status(200).json({
            success: true,
            message: 'Product is updated successfully',
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
// delete A product
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.deleteProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: 'Product is deleted successfully',
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const ProductController = {
    createProduct,
    getAllproducts,
    getSingleproduct,
    updateProduct,
    deleteProduct
}