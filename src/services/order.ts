import Order from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/order';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => this.model.getAll();
}

export default OrderService;
