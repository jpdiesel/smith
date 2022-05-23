import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const route = Router();

const productsController = new ProductsController();

route.get('/', productsController.getAll);

export default route;
