import { Model, Optional } from 'sequelize';
export interface RylawChatAttributes {
    id: number;
    user_id: number;
    file_id?: number;
    file_summary?: string;
    session_id: string;
    session_name?: string;
    query: string;
    response: string;
    created_at: Date;
    severity?: string;
    category?: string;
    premium_plan_unlocked?: string;
}
export interface RylawChatCreationAttributes extends Optional<RylawChatAttributes, 'id' | 'severity' | 'category' | 'created_at' | 'premium_plan_unlocked' | 'session_name'> {
}
declare class RylawChat extends Model<RylawChatAttributes, RylawChatCreationAttributes> implements RylawChatAttributes {
    id: number;
    user_id: number;
    file_id: number;
    session_id: string;
    session_name?: string;
    query: string;
    response: string;
    created_at: Date;
    severity: string;
    category: string;
    premium_plan_unlocked: string;
}
export default RylawChat;
//# sourceMappingURL=rylaw_chat.d.ts.map