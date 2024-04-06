import { DataTypes } from "sequelize";

const ordersModel = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};

export function Orders(sequelize) {
  return sequelize.define("orders", ordersModel, {
    freezeTableName: true,
  });
}
