import express from 'express';
import {
    CityRoutes,
    UserAuthRoutes, 
    UserRoutes, 
    CategoryRoutes,
    SubCategoryRoutes,
    AdminAuthRoutes,
    ProductRoutes,
    OrderRoutes
} from './index.js'

const routes = express.Router();

routes.use("/api/v1/city", CityRoutes);
routes.use("/api/v1/user", UserRoutes);
routes.use("/api/v1/userauth",UserAuthRoutes);
routes.use("/api/v1/adminauth", AdminAuthRoutes);
routes.use("/api/v1/category", CategoryRoutes)
routes.use("/api/v1/subcategory", SubCategoryRoutes)
routes.use("/api/v1/product", ProductRoutes)
routes.use("/api/v1/order", OrderRoutes)


export default routes;