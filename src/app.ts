import express from 'express';
import orderRoutes from './routes/orderRoute';
import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', orderRoutes);

export default app;
