
import  express, { Application, Request, Response }  from "express"
import { ProductRoutes } from "./app/module/product/product.route"
import cors from 'cors';
import { orderRoutes } from "./app/module/order/order.route";
import { TodosRoutes } from "./app/module/todos/todos.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/todos', TodosRoutes)



app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

export default app