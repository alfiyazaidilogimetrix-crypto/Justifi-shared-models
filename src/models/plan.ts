import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import { Json } from 'sequelize/types/utils';

export interface PlanAttributes {
    id: number;
    name: string;
    description?: string;
    price: number;
    currency: string;
    duration: 'monthly' | 'yearly' | 'quaterly' | 'daily' | 'weekly' | 'lifetime';
    is_active: boolean;
    is_recommended: boolean;
    plan_type: 'CALLING' | 'EMERGENCY' | 'LAWYER_MONTHLY' | 'LAWYER_YEARLY' | 'LAWYER_TRIAL' | 'RYLAW_BOT' | 'ENTERPRISE_PLAN';
    features?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PlanCreationAttributes extends Optional<
    PlanAttributes,
    | 'id'
    | 'description'
    | 'currency'
    | 'duration'
    | 'is_active'
    | 'is_recommended'
    | 'features'
    | 'plan_type'
    | 'createdAt'
    | 'updatedAt'
> { }

class Plan
    extends Model<PlanAttributes, PlanCreationAttributes>
    implements PlanAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public currency!: string;
    public duration!: 'monthly' | 'yearly' | 'quaterly' | 'daily' | 'weekly' | 'lifetime';
    public is_active!: boolean;
    public is_recommended!: boolean;
    public plan_type!: 'CALLING' | 'EMERGENCY' | 'LAWYER_MONTHLY' | 'LAWYER_YEARLY' | 'LAWYER_TRIAL' | 'RYLAW_BOT'| 'ENTERPRISE_PLAN';
    public features!: any;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Plan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        plan_type: {
            type: DataTypes.ENUM('CALLING', 'EMERGENCY', 'LAWYER_MONTHLY', 'LAWYER_YEARLY', 'LAWYER_TRIAL', 'RYLAW_BOT', 'ENTERPRISE_PLAN'),
            allowNull: true,
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        currency: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'INR',
        },

        duration: {
            type: DataTypes.ENUM('monthly', 'yearly', 'quaterly', 'daily', 'weekly', 'lifetime'),
            allowNull: false,
            defaultValue: 'monthly',
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },

        is_recommended: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        features: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'plans',
        timestamps: true,
        underscored: true,
    },
);

export default Plan;