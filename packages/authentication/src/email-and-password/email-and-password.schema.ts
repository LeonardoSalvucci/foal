import { Sequelize } from '@foal/sequelize';

export const emailAndPasswordSchema = {
  email: { type: Sequelize.STRING, unique: true },
  password: { type: Sequelize.STRING },
};

export interface EmailAndPassword {
  email: string;
  password: string;
}