import { Request, Response } from 'express';
import UserService from '../services/user';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response): Promise<Response | void> => {
    const { username, classe, level, password } = req.body;
    const token = await this.userService.create({ username, classe, level, password });
    return res.status(201).json({ token });
  };
}

export default UserController;
