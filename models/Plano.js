import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Plano = sequelize.define('plano', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  }
}, {
  timestamps: false 
});