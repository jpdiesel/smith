import { Pool } from 'mysql2/promise';
import Product from '../interfaces/productInterface';
import connection from './connection';

class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [product] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return product as Product[];
  }  
}

export default ProductModel;
