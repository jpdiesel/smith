import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async ({ username, classe, level, password }: User): Promise<number> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
      [username, classe, level, password],
    );

    return insertId;
  };
}

export default UserModel;
