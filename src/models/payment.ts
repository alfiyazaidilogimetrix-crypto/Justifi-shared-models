import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface PaymentAttributes {
    id: number;
    user_id: number;
    plan_id: number;
    amount: number;
    currency: string;
    status: 'created' | 'pending' | 'success' | 'failed';
    payment_method?: string;
    payment_properties?: any;
    is_used?: boolean;
    referral_code_id?: number | null;
    discount_amount?: number | null;
    original_amount?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PaymentCreationAttributes extends Optional<
    PaymentAttributes,
    | 'id'
    | 'currency'
    | 'status'
    | 'payment_method'
    | 'payment_properties'
    | 'is_used'
    | 'referral_code_id'
    | 'discount_amount'
    | 'original_amount'
    | 'createdAt'
    | 'updatedAt'
> { }

class Payment
    extends Model<PaymentAttributes, PaymentCreationAttributes>
    implements PaymentAttributes {
    public id!: number;
    public user_id!: number;
    public plan_id!: number;
    public amount!: number;
    public currency!: string;
    public status!: 'created' | 'pending' | 'success' | 'failed';
    public payment_method!: string;
    public payment_properties!: any;
    public is_used!: boolean;
    public referral_code_id!: number | null;
    public discount_amount!: number | null;
    public original_amount!: number | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Payment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        plan_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plans',
                key: 'id',
            },
        },

        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        currency: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'INR',
        },

        status: {
            type: DataTypes.ENUM('paid', 'created', 'cancelled', 'failed'),
            allowNull: true,
            defaultValue: 'created',
        },

        payment_method: {
            type: DataTypes.ENUM("Prepaid", "COD", "Wallet"),
            allowNull: true,
            defaultValue: "Prepaid"
        },
        is_used:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        payment_properties: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        referral_code_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        discount_amount: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        original_amount: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'payments',
        timestamps: true,
        underscored: true,
    },
);

export default Payment;