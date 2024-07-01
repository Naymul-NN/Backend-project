import { Schema, model } from "mongoose";
import { product } from "./porduct.interface";
  
  
  const ProductSchema =new Schema<product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
      {
        type: { type: String, required: true },
        value: { type: String, required: true }
      }
    ],
    inventory: {
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, required: true }
    }
  });
  

  export const ProductModel = model<product>('Product', ProductSchema);