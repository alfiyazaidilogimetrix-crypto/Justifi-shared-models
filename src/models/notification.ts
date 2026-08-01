import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface NotificationAttributes {
    id: number;
    from_user_id?: number;
    to_user_id: number;
    title: string;
    message: string;
    type:
        | 'GENERAL'
        | 'SYSTEM'
        | 'PAYMENT'
        | 'BOOKING'
        | 'CHAT'
        | 'ORDER'
        | 'REMINDER'
        | 'PROMOTIONAL';
    reference_id?: number;
    reference_type?: string;
    data?: object;
    is_read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface NotificationCreationAttributes
    extends Optional<
        NotificationAttributes,
        | 'id'
        | 'from_user_id'
        | 'reference_id'
        | 'reference_type'
        | 'data'
        | 'is_read'
        | 'createdAt'
        | 'updatedAt'
    > {}

class Notification
    extends Model<NotificationAttributes, NotificationCreationAttributes>
    implements NotificationAttributes
{
    public id!: number;
    public from_user_id!: number;
    public to_user_id!: number;
    public title!: string;
    public message!: string;
    public type!:
        | 'GENERAL'
        | 'SYSTEM'
        | 'PAYMENT'
        | 'BOOKING'
        | 'CHAT'
        | 'ORDER'
        | 'REMINDER'
        | 'PROMOTIONAL';

    public reference_id!: number;
    public reference_type!: string;
    public data!: object;
    public is_read!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Notification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        from_user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        to_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        type: {
            type: DataTypes.ENUM(
                'GENERAL',
                'SYSTEM',
                'PAYMENT',
                'BOOKING',
                'CHAT',
                'ORDER',
                'REMINDER',
                'PROMOTIONAL'
            ),
            allowNull: false,
            defaultValue: 'GENERAL',
        },

        reference_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        reference_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        data: {
            type: DataTypes.JSON,
            allowNull: true,
        },

        is_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'notifications',
        timestamps: true,
        underscored: true,
    }
);

export default Notification;