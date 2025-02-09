import express from "express";
import d from "dotenv";
import customerRoutes from "./Customer/routes/customer.routes.js"
import expenseRoutes from "./Expense/routes/expense.routes.js"
import itemRoutes from "./Item/routes/item.routes.js"
import orderRoutes from "./Order/routes/order.routes.js"
import productRoutes from "./Product/routes/product.routes.js"
import reviewRoutes from "./Customer/routes/review.routes.js"

import { connectDb } from "./core/db.js";
import bodyParser from "body-parser";

d.config();

export const app = express();

const port  = process.env.PORT  || 3000;

app.use(express.json()); // This is for express v4.16+

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Or, if using body-parser (older versions of Express)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

app.use('/api', customerRoutes);
app.use('/api', expenseRoutes);
app.use('/api', itemRoutes);
app.use('/api', orderRoutes);
app.use('/api', productRoutes);
app.use('/api', reviewRoutes);


app.listen(port, () => {
    connectDb().then((v)=>{
        console.log(`Server is running on port ${port}`);
    })
});