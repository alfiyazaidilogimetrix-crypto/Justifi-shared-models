import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface WalletTransactionAttributes {
    id: number;
    user_id: number;
    transaction_type: 'CREDIT_REFERRAL' | 'DEBIT_PLAN_PURCHASE' | 'DEBIT_WITHDRAWAL';
    amount: number;
    balance_after: number;
    reference_id?: number | null;
    description?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface WalletTransactionCreationAttributes extends Optional<
    WalletTransactionAttributes,
    | 'id'
    | 'reference_id'
    | 'description'
    | 'createdAt'
    | 'updatedAt'
> { }

class WalletTransaction
    extends Model<WalletTransactionAttributes, WalletTransactionCreationAttributes>
    implements WalletTransactionAttributes {
    public id!: number;
    public user_id!: number;
    public transaction_type!: 'CREDIT_REFERRAL' | 'DEBIT_PLAN_PURCHASE' | 'DEBIT_WITHDRAWAL';
    public amount!: number;
    public balance_after!: number;
    public reference_id!: number | null;
    public description!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

WalletTransaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id',
            },
            onDelete: 'CASCADE',
        },
        transaction_type: {
            type: DataTypes.ENUM('CREDIT_REFERRAL', 'DEBIT_PLAN_PURCHASE', 'DEBIT_WITHDRAWAL'),
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        balance_after: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        reference_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'wallet_transactions',
        timestamps: true,
        indexes: [
            {
                fields: ['user_id'],
            },
            {
                fields: ['transaction_type'],
            },
        ],
    }
);

export default WalletTransaction;
