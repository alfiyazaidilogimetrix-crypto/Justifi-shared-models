import { Model, Optional } from 'sequelize';
interface ChatGroupAttributes {
    id: number;
    group_name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface ChatGroupCreationAttributes extends Optional<ChatGroupAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class ChatGroup extends Model<ChatGroupAttributes, ChatGroupCreationAttributes> implements ChatGroupAttributes {
    id: number;
    group_name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default ChatGroup;
//# sourceMappingURL=chat_group.d.ts.map