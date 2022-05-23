import { Request, Response } from 'express';
import ProductService from '../services/products';

class ProductsController {
  constructor(private productsService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.productsService.create(product);

    res.status(201).json(createdProduct);
  };
}

export default ProductsController;
