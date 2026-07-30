import { Model, Optional } from 'sequelize';
export interface MessageAttributes {
    message_id: number;
    query_id?: number | null;
    message?: string;
    type: string;
    sender_id: number;
    receiver_id?: number | null;
    group_id?: number | null;
    room_id?: string | null;
    is_group?: boolean;
    delivered?: boolean;
    seen?: boolean;
    delivered_at?: Date | null;
    seen_at?: Date | null;
    is_deleted_for_everyone?: boolean;
    deleted_at?: Date | null;
    file_id?: number | null;
    slot_id?: number | null;
    sent_at?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    file?: any;
    slot?: any;
}
export interface MessageCreationAttributes extends Optional<MessageAttributes, 'message_id' | 'receiver_id' | 'group_id' | 'room_id' | 'is_group' | 'delivered' | 'seen' | 'delivered_at' | 'seen_at' | 'is_deleted_for_everyone' | 'deleted_at' | 'file_id' | 'slot_id' | 'sent_at' | 'createdAt' | 'updatedAt'> {
}
declare class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
    message_id: number;
    query_id?: number | null;
    message?: string;
    type: string;
    sender_id: number;
    receiver_id?: number | null;
    group_id?: number | null;
    room_id?: string | null;
    is_group?: boolean;
    delivered?: boolean;
    seen?: boolean;
    delivered_at?: Date | null;
    seen_at?: Date | null;
    is_deleted_for_everyone?: boolean;
    deleted_at?: Date | null;
    file_id?: number | null;
    slot_id?: number | null;
    sent_at?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    readonly file?: any;
    readonly slot?: any;
}
export default Message;
//# sourceMappingURL=message.d.ts.map