import { ProductModel } from "../product.model"
import { product } from "./porduct.interface"


const createProductIntoBb = async(Product: product)=>{

    const result = await ProductModel.create(Product)
    return result
 };


 export const ProductService = {
    createProductIntoBb
 }