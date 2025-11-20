import express from 'express';
import IsUserLoggedIn from '../util/IsUserLoggedIn.js';
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
import { Checkout, ConfirmOrder, GetAllOrder, CountOrder, UpdateOrderStatusById, GetAllByUserId, DeleteAllOrder, CountPendingOrder } from '../controllers/OrderController.js';

let routes = express.Router();

routes.post("/checkout", IsUserLoggedIn, Checkout);
routes.post("/confirm", IsUserLoggedIn, ConfirmOrder);
routes.get("/all", GetAllOrder);
routes.get("/countorder",IsAdminLoggedIn,  CountOrder);
routes.get("/countpendingorder",IsAdminLoggedIn,  CountPendingOrder);
routes.get("/deleteall", DeleteAllOrder);
routes.get("/getallbyuser",IsUserLoggedIn, GetAllByUserId);
routes.put("/updateorderstatus/:id",IsAdminLoggedIn, UpdateOrderStatusById);

export default routes;