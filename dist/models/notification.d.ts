import { Model, Optional } from 'sequelize';
export interface NotificationAttributes {
    id: number;
    from_user_id?: number;
    to_user_id: number;
    title: string;
    message: string;
    type: 'GENERAL' | 'SYSTEM' | 'PAYMENT' | 'BOOKING' | 'CHAT' | 'ORDER' | 'REMINDER' | 'PROMOTIONAL';
    reference_id?: number;
    reference_type?: string;
    data?: object;
    is_read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface NotificationCreationAttributes extends Optional<NotificationAttributes, 'id' | 'from_user_id' | 'reference_id' | 'reference_type' | 'data' | 'is_read' | 'createdAt' | 'updatedAt'> {
}
declare class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
    id: number;
    from_user_id: number;
    to_user_id: number;
    title: string;
    message: string;
    type: 'GENERAL' | 'SYSTEM' | 'PAYMENT' | 'BOOKING' | 'CHAT' | 'ORDER' | 'REMINDER' | 'PROMOTIONAL';
    reference_id: number;
    reference_type: string;
    data: object;
    is_read: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Notification;
//# sourceMappingURL=notification.d.ts.map