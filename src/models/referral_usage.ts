import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface ReferralUsageAttributes {
    id: number;
    referral_code_id: number;
    referred_user_id: number;
    referrer_user_id: number;
    payment_id?: number | null;
    plan_id: number;
    original_amount: number;
    discounted_amount: number;
    discount_given: number;
    referrer_benefit_amount: number;
    status: 'initiated' | 'completed' | 'failed' | 'reversed';
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ReferralUsageCreationAttributes extends Optional<
    ReferralUsageAttributes,
    | 'id'
    | 'payment_id'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
> { }

class ReferralUsage
    extends Model<ReferralUsageAttributes, ReferralUsageCreationAttributes>
    implements ReferralUsageAttributes {
    public id!: number;
    public referral_code_id!: number;
    public referred_user_id!: number;
    public referrer_user_id!: number;
    public payment_id!: number | null;
    public plan_id!: number;
    public original_amount!: number;
    public discounted_amount!: number;
    public discount_given!: number;
    public referrer_benefit_amount!: number;
    public status!: 'initiated' | 'completed' | 'failed' | 'reversed';
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ReferralUsage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        referral_code_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'referral_codes',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        referred_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id',
            },
            onDelete: 'CASCADE',
        },
        referrer_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id',
            },
            onDelete: 'CASCADE',
        },
        payment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'payments',
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        plan_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plans',
                key: 'id',
            },
        },
        original_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discounted_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount_given: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        referrer_benefit_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('initiated', 'completed', 'failed', 'reversed'),
            allowNull: false,
            defaultValue: 'initiated',
        },
    },
    {
        sequelize,
        tableName: 'referral_usages',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['referral_code_id', 'referred_user_id'],
                name: 'unique_user_per_referral',
            },
            {
                fields: ['referred_user_id'],
            },
            {
                fields: ['referrer_user_id'],
            },
            {
                fields: ['payment_id'],
            },
        ],
    }
);

export default ReferralUsage;
