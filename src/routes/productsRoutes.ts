import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import { amountValidation, nameValidation } from '../middlewares/productsMidd';

const route = Router();

const productsController = new ProductsController();

route.get('/', productsController.getAll);
route.post('/', nameValidation, amountValidation, productsController.create);

export default route;
