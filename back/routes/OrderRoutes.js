import express from 'express';
import IsUserLoggedIn from '../util/IsUserLoggedIn.js';
import { Checkout, ConfirmOrder } from '../controllers/OrderController.js';

let routes = express.Router();

routes.use("/checkout", IsUserLoggedIn, Checkout);
routes.use("/confirm", IsUserLoggedIn, ConfirmOrder);

export default routes;