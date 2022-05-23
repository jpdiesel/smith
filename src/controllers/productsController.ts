import { Request, Response } from 'express';
import ProductService from '../services/products';

class ProductsController {
  constructor(private productsService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  };
}

export default ProductsController;
