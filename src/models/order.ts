import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [order] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    return order as Order[];
  }
} 