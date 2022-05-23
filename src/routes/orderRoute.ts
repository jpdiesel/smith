import { Router } from 'express';
import OrderController from '../controllers/orderController';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll);

export default route;