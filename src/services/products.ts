import Product from '../interfaces/productInterface';
import ProductModel from '../models/products';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;
