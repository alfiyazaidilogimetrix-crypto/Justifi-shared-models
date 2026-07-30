import { Model, Optional } from 'sequelize';
interface MessageDeleteAttributes {
    id: number;
    message_id: number;
    user_id: number;
    deleted_at?: Date;
}
interface MessageDeleteCreationAttributes extends Optional<MessageDeleteAttributes, 'id' | 'deleted_at'> {
}
declare class MessageDelete extends Model<MessageDeleteAttributes, MessageDeleteCreationAttributes> implements MessageDeleteAttributes {
    id: number;
    message_id: number;
    user_id: number;
    deleted_at?: Date;
}
interface MessageReplyAttributes {
    id: number;
    parent_message_id: number;
    reply_message_id: number;
    user_id: number;
    replied_at?: Date;
}
interface MessageReplyCreationAttributes extends Optional<MessageReplyAttributes, 'id' | 'replied_at'> {
}
declare class MessageReply extends Model<MessageReplyAttributes, MessageReplyCreationAttributes> implements MessageReplyAttributes {
    id: number;
    parent_message_id: number;
    reply_message_id: number;
    user_id: number;
    replied_at?: Date;
}
interface MessageStatusAttributes {
    id: number;
    message_id: number;
    user_id: number;
    group_id?: number | null;
    delivered?: boolean;
    delivered_at?: Date | null;
    seen?: boolean;
    seen_at?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}
interface MessageStatusCreationAttributes extends Optional<MessageStatusAttributes, 'id' | 'group_id' | 'delivered' | 'delivered_at' | 'seen' | 'seen_at' | 'createdAt' | 'updatedAt'> {
}
declare class MessageStatus extends Model<MessageStatusAttributes, MessageStatusCreationAttributes> implements MessageStatusAttributes {
    id: number;
    message_id: number;
    user_id: number;
    group_id?: number | null;
    delivered?: boolean;
    delivered_at?: Date | null;
    seen?: boolean;
    seen_at?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}
export { MessageStatus };
export { MessageReply };
export { MessageDelete };
//# sourceMappingURL=message_process.d.ts.map