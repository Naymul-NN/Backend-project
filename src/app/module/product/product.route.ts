import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router()


router.post('/',ProductController.createProduct)
router.get('/',ProductController.getAllproducts)
router.get('/:productId',ProductController.getSingleproduct)
export const ProductRoutes = router;