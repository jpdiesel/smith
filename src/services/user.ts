import jwt from 'jsonwebtoken';
import User from '../interfaces/userInterface';
import connection from '../models/connection';
import UserModel from '../models/user';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async ({ username, classe, level, password }: User): Promise<string> => {
    const insertId = await this.model.create({ username, classe, level, password });

    const jwtConfig: jwt.SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    
    const token = jwt.sign({ data: { username, id: insertId } }, 'SEGREDOUUUUU', jwtConfig);
    
    return token;
  };
}