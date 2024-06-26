import { Request, Response } from "express"
import { ProductService } from "./product.service"
import productValidationSchema from "./product.validation";


// post product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body

        // do some validation by joi
        const { error, value } = productValidationSchema.validate(productData);

        if (error) {
            res.status(500).json({
                success: false,
                message: 'something went wrong',
                error: error.details,
            })
        }

        const result = await ProductService.createProductIntoBb(value)
        await result.save();
        res.status(200).json({
            success: true,
            message: 'procuct is created successfully',
            data: result
        })
    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
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

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}
// get single product

const getSingleproduct = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await ProductService.getSingleProductFromDb(studentId)

        res.status(200).json({
            success: true,
            message: 'product are recive successfully',
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
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
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

// add search system
const searchProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await ProductService.searchProductsInDb(searchTerm as string);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result
        });
    } catch (error) {
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
    deleteProduct,
    searchProducts
}