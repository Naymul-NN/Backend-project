import { ProductOrder } from "./order.interface";
import { ProductOrderModel } from "./order.model";

const createProductOrderIntoBb = async(Order: ProductOrder)=>{

    const result = await ProductOrderModel.create(Order)
    return result
 };

 export const OrderService = {
   createProductOrderIntoBb,
 }
