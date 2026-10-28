import { Model, Optional } from 'sequelize';
export interface CampaignSendLogAttributes {
    id: number;
    campaign_id?: number | null;
    lawyer_id?: number | null;
    email: string;
    status: 'SENT' | 'FAILED';
    message_id?: string | null;
    error_message?: string | null;
    is_opened?: boolean;
    opened_at?: Date | null;
    open_count?: number;
    delivery_status?: 'PENDING' | 'DELIVERED' | 'BOUNCED' | 'COMPLAINT' | null;
    bounce_type?: string | null;
    sent_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}
export interface CampaignSendLogCreationAttributes extends Optional<CampaignSendLogAttributes, 'id' | 'campaign_id' | 'lawyer_id' | 'message_id' | 'error_message' | 'is_opened' | 'opened_at' | 'open_count' | 'delivery_status' | 'bounce_type' | 'sent_at' | 'created_at' | 'updated_at'> {
}
declare class CampaignSendLog extends Model<CampaignSendLogAttributes, CampaignSendLogCreationAttributes> implements CampaignSendLogAttributes {
    id: number;
    campaign_id?: number | null;
    lawyer_id?: number | null;
    email: string;
    status: 'SENT' | 'FAILED';
    message_id?: string | null;
    error_message?: string | null;
    is_opened?: boolean;
    opened_at?: Date | null;
    open_count?: number;
    delivery_status?: 'PENDING' | 'DELIVERED' | 'BOUNCED' | 'COMPLAINT' | null;
    bounce_type?: string | null;
    sent_at?: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default CampaignSendLog;
//# sourceMappingURL=campaign_send_log.d.ts.map