import d from "dotenv";
d.config();
import express from "express";
import customerRoutes from "./Customer/routes/customer.routes.js"
import expenseRoutes from "./Expense/routes/expense.routes.js"
import itemRoutes from "./Item/routes/item.routes.js"
import orderRoutes from "./Order/routes/order.routes.js"
import productRoutes from "./Product/routes/product.routes.js"
import employeesRoutes from "./Employee/routes/employee.routes.js"
import reviewRoutes from "./Customer/routes/review.routes.js"
import employeesActivityRoutes from "./Employee/routes/employee.activity.routes.js"
import mainRoutes from "./core/routes/main.routes.js"

import { connectDb } from "./core/db.js";

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

app.use('/api/customers', customerRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/employees', employeesRoutes);
app.use("/api/employee-activities", employeesActivityRoutes)

// the stupid search function
app.use("/api/main", mainRoutes)

app.listen(port, () => {
    connectDb().then((v)=>{
        console.log(`Server is running on port ${port}`);
    })
});