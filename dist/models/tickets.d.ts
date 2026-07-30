import { Model, Optional } from 'sequelize';
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
    query_id?: number;
    messages?: MessageType[];
    expires_at?: Date;
    status?: 'open' | 'in_progress' | 'resolved' | 'closed';
    createdAt?: Date;
    updatedAt?: Date;
}
export interface TicketCreationAttributes extends Optional<TicketAttributes, 'id' | 'title' | 'is_closed' | 'user_id' | 'query_id' | 'messages' | 'expires_at' | 'status' | 'createdAt' | 'updatedAt'> {
}
declare class Ticket extends Model<TicketAttributes, TicketCreationAttributes> implements TicketAttributes {
    id: number;
    user_id: number;
    query_id: number;
    title: string;
    is_closed: boolean;
    messages: MessageType[];
    expires_at: Date;
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Ticket;
//# sourceMappingURL=tickets.d.ts.map