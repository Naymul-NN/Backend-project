import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router()


router.post('/',ProductController.createProduct);
router.get('/',ProductController.getAllproducts);
router.get('/:productId',ProductController.getSingleproduct);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);
router.get('/', ProductController.searchProducts);

export const ProductRoutes = router;