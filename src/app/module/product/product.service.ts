import { ProductModel } from "../product.model"
import { product } from "./porduct.interface"

// create products
const createProductIntoBb = async(Product: product)=>{

    const result = await ProductModel.create(Product)
    return result
 };

//  get all products

const getAllProductFromDb = async()=>{
   const result = await ProductModel.find()
   return result
}

// get single product by id

const getSingleProductFromDb = async(id : string)=>{
   const result = await ProductModel.findOne({id: id})
   return result
}

// update single product
const updateProductInDb = async(id: string, update: Partial<product>) => {
   const result = await ProductModel.updateOne({ _id: id }, update, { new: true });
   return result;
}
// delete single product by id
const deleteProductFromDb = async(id: string) => {
   const result = await ProductModel.deleteOne({ _id: id });
   return result;
};
// add search system
const searchProductsInDb = async (searchTerm: string) => {
   const searchCriteria = {
       $or: [
           { name: { $regex: searchTerm, $options: 'i' } },
           { description: { $regex: searchTerm, $options: 'i' } },
           { category: { $regex: searchTerm, $options: 'i' } },
           { tags: { $regex: searchTerm, $options: 'i' } }
       ]
   };
   const result = await ProductModel.find(searchCriteria);
   return result;
};

 export const ProductService = {
    createProductIntoBb,
    getAllProductFromDb,
    getSingleProductFromDb,
    updateProductInDb,
    deleteProductFromDb,
    searchProductsInDb
 }