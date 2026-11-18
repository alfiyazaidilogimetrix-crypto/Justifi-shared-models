import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface PayoutRequestAttributes {
    id: number;
    user_id: number;
    amount: number;
    account_holder_name: string;
    bank_account_number: string;
    ifsc_code: string;
    status: 'PENDING' | 'PROCESSED' | 'REJECTED';
    utr_number?: string | null;
    processed_at?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PayoutRequestCreationAttributes extends Optional<
    PayoutRequestAttributes,
    | 'id'
    | 'status'
    | 'utr_number'
    | 'processed_at'
    | 'createdAt'
    | 'updatedAt'
> { }

class PayoutRequest
    extends Model<PayoutRequestAttributes, PayoutRequestCreationAttributes>
    implements PayoutRequestAttributes {
    public id!: number;
    public user_id!: number;
    public amount!: number;
    public account_holder_name!: string;
    public bank_account_number!: string;
    public ifsc_code!: string;
    public status!: 'PENDING' | 'PROCESSED' | 'REJECTED';
    public utr_number!: string | null;
    public processed_at!: Date | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PayoutRequest.init(
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
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        account_holder_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        bank_account_number: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        ifsc_code: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('PENDING', 'PROCESSED', 'REJECTED'),
            allowNull: false,
            defaultValue: 'PENDING',
        },
        utr_number: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        processed_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'payout_requests',
        timestamps: true,
        indexes: [
            {
                fields: ['user_id'],
            },
            {
                fields: ['status'],
            },
        ],
    }
);

export default PayoutRequest;
