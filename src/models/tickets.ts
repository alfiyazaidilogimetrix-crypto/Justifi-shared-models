import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface MessageType {
    sender_id: number;
    receiver_id: number;
    message: string;
    sender_type: 'user' | 'admin';
    is_read?: boolean;
    created_at?: Date;
}

export interface TicketAttributes {
    id: number;
    title: string;
    is_closed: boolean;
    user_id?: number;
    messages?: MessageType[];
    expires_at?: Date;
    status?: 'open' | 'in_progress' | 'resolved' | 'closed';
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TicketCreationAttributes extends Optional<
    TicketAttributes,
    | 'id'
    | 'title'
    | 'is_closed'
    | 'user_id'
    | 'messages'
    | 'expires_at'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
> { }

class Ticket
    extends Model<TicketAttributes, TicketCreationAttributes>
    implements TicketAttributes {
    public id!: number;
    public user_id!: number;
    public title!: string;
    public is_closed!: boolean;
    public messages!: MessageType[];
    public expires_at!: Date;
    public status!: 'open' | 'in_progress' | 'resolved' | 'closed';
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Ticket.init(
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

        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        is_closed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

        status: {
            type: DataTypes.ENUM('open', 'in_progress', 'resolved', 'closed'),
            defaultValue: 'open',
        },

        // 🔥 Messages Array of Objects
        messages: {
            type: DataTypes.JSON, // PostgreSQL recommended
            allowNull: true,
            defaultValue: [],
        },

        expires_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'tickets',
        timestamps: true,
        underscored: true,
    },
);

export default Ticket;
