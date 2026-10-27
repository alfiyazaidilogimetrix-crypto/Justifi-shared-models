import { Model, Optional } from 'sequelize';
export interface CampaignLawyerAttributes {
    id: number;
    email: string;
    name?: string;
    company?: string;
    mobile?: string;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    website?: string;
    category?: string;
    bar_council_number?: string;
    status: 'PENDING' | 'SENT' | 'FAILED' | 'UNSUBSCRIBED';
    campaign_id?: number | null;
    import_batch_id?: string;
    last_sent_at?: Date | null;
    created_at?: Date;
    updated_at?: Date;
}
export interface CampaignLawyerCreationAttributes extends Optional<CampaignLawyerAttributes, 'id' | 'name' | 'company' | 'mobile' | 'address' | 'pincode' | 'city' | 'state' | 'website' | 'category' | 'bar_council_number' | 'status' | 'campaign_id' | 'import_batch_id' | 'last_sent_at' | 'created_at' | 'updated_at'> {
}
declare class CampaignLawyer extends Model<CampaignLawyerAttributes, CampaignLawyerCreationAttributes> implements CampaignLawyerAttributes {
    id: number;
    email: string;
    name?: string;
    company?: string;
    mobile?: string;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    website?: string;
    category?: string;
    bar_council_number?: string;
    status: 'PENDING' | 'SENT' | 'FAILED' | 'UNSUBSCRIBED';
    campaign_id?: number | null;
    import_batch_id?: string;
    last_sent_at?: Date | null;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default CampaignLawyer;
//# sourceMappingURL=campaign_lawyer.d.ts.map