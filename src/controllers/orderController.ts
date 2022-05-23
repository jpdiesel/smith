import { Request, Response } from 'express';
import OrderModel from '../services/order';
import ProductService from '../services/products';

class OrderController { 
  serviceOrd = new OrderModel();

  serviceProd = new ProductService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.serviceOrd.getAll();
    const products = await this.serviceProd.getAll();
    const result = orders.map((order) => {
      const productId = products.filter((prod) => prod.orderId === order.id);
      const idsProducts = productId.map((prod) => prod.id);
      return {
        ...order,
        productsIds: idsProducts,
      };
    }); 
    // essa parte foi feita baseada no código do Ary Barbosa
    return res.status(200).json(result);
  };
}

export default OrderController;
