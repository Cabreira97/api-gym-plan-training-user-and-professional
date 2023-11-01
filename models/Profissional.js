import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Profissional = sequelize.define('profissional', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  especialidade: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
}, {
  timestamps: false 
});