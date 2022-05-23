import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [product] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return product as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );

    const [data] = result;
    const { insertId } = data;

    return { id: insertId, name, amount };
  }
}

export default ProductModel;
