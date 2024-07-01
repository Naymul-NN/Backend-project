import { ProductOrder } from "./order.interface";
import { ProductOrderModel } from "./order.model";

// post a order

const createProductOrderIntoBb = async(Order: ProductOrder)=>{
    const result = await ProductOrderModel.create(Order)
    return result
 };

// get all the order
const getAllorders = async()=> {
  const result = await ProductOrderModel.find()
  return result;
}


// get data by eamil
const getOrdersByEmail = async (email: string) => {
  const result = await ProductOrderModel.find({ email });
  return result;
};


 export const OrderService = {
   createProductOrderIntoBb,
   getAllorders,
   getOrdersByEmail
 }
