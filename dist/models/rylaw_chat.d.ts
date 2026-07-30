import { Model, Optional } from 'sequelize';
export interface RylawChatAttributes {
    id: number;
    user_id: number;
    file_id?: number;
    file_summary?: string;
    chat_id: string;
    query: string;
    response: string;
    created_at: Date;
    severity?: string;
    category?: string;
}
export interface RylawChatCreationAttributes extends Optional<RylawChatAttributes, 'id' | 'severity' | 'category' | 'created_at'> {
}
declare class RylawChat extends Model<RylawChatAttributes, RylawChatCreationAttributes> implements RylawChatAttributes {
    id: number;
    user_id: number;
    file_id: number;
    chat_id: string;
    query: string;
    response: string;
    created_at: Date;
    severity: string;
    category: string;
}
export default RylawChat;
//# sourceMappingURL=rylaw_chat.d.ts.map