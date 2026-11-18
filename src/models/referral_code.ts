import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface ReferralCodeAttributes {
    id: number;
    user_id: number;
    code: string;
    state_code: string;
    city_code: string;
    discount_percentage: number;
    referrer_benefit_percentage: number;
    valid_until?: Date | null;
    is_active: boolean;
    has_seen_welcome_modal: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ReferralCodeCreationAttributes extends Optional<
    ReferralCodeAttributes,
    | 'id'
    | 'discount_percentage'
    | 'referrer_benefit_percentage'
    | 'valid_until'
    | 'is_active'
    | 'has_seen_welcome_modal'
    | 'createdAt'
    | 'updatedAt'
> { }

class ReferralCode
    extends Model<ReferralCodeAttributes, ReferralCodeCreationAttributes>
    implements ReferralCodeAttributes {
    public id!: number;
    public user_id!: number;
    public code!: string;
    public state_code!: string;
    public city_code!: string;
    public discount_percentage!: number;
    public referrer_benefit_percentage!: number;
    public valid_until!: Date | null;
    public is_active!: boolean;
    public has_seen_welcome_modal!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ReferralCode.init(
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
        code: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        state_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        city_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        discount_percentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
            defaultValue: 20.00,
        },
        referrer_benefit_percentage: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
            defaultValue: 10.00,
        },
        valid_until: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        has_seen_welcome_modal: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'referral_codes',
        timestamps: true,
        indexes: [
            {
                fields: ['code'],
                unique: true,
            },
            {
                fields: ['state_code', 'city_code'],
            },
            {
                fields: ['user_id'],
            },
        ],
    }
);

export default ReferralCode;
