import { Model, Optional } from 'sequelize';
export interface CampaignSendLogAttributes {
    id: number;
    lawyer_id?: number | null;
    email: string;
    status: 'SENT' | 'FAILED';
    message_id?: string | null;
    error_message?: string | null;
    sent_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}
export interface CampaignSendLogCreationAttributes extends Optional<CampaignSendLogAttributes, 'id' | 'lawyer_id' | 'message_id' | 'error_message' | 'sent_at' | 'created_at' | 'updated_at'> {
}
declare class CampaignSendLog extends Model<CampaignSendLogAttributes, CampaignSendLogCreationAttributes> implements CampaignSendLogAttributes {
    id: number;
    lawyer_id?: number | null;
    email: string;
    status: 'SENT' | 'FAILED';
    message_id?: string | null;
    error_message?: string | null;
    sent_at?: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default CampaignSendLog;
//# sourceMappingURL=campaign_send_log.d.ts.map