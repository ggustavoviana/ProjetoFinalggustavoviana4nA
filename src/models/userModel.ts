import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; // Verifique se o caminho está correto

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public age!: number;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
    }
);

export default User; // Exporte como default
