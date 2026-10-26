import { Model, Optional } from 'sequelize';
export interface EmailSuppressionAttributes {
    id: number;
    email: string;
    reason: 'UNSUBSCRIBE' | 'BOUNCE' | 'COMPLAINT' | 'MANUAL';
    unsubscribed_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}
export interface EmailSuppressionCreationAttributes extends Optional<EmailSuppressionAttributes, 'id' | 'reason' | 'unsubscribed_at' | 'created_at' | 'updated_at'> {
}
declare class EmailSuppression extends Model<EmailSuppressionAttributes, EmailSuppressionCreationAttributes> implements EmailSuppressionAttributes {
    id: number;
    email: string;
    reason: 'UNSUBSCRIBE' | 'BOUNCE' | 'COMPLAINT' | 'MANUAL';
    unsubscribed_at?: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default EmailSuppression;
//# sourceMappingURL=email_suppression.d.ts.map