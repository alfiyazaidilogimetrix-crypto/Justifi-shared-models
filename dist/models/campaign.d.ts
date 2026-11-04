import { Model, Optional } from 'sequelize';
export interface CampaignAttributes {
    id: number;
    name: string;
    description?: string;
    start_date: string;
    end_date: string;
    daily_limit: number;
    daily_trigger_time: string;
    total_target: number;
    total_sent: number;
    status: 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
    last_automated_run_at?: Date | null;
    created_at?: Date;
    updated_at?: Date;
}
export interface CampaignCreationAttributes extends Optional<CampaignAttributes, 'id' | 'description' | 'daily_limit' | 'daily_trigger_time' | 'total_target' | 'total_sent' | 'status' | 'last_automated_run_at' | 'created_at' | 'updated_at'> {
}
declare class Campaign extends Model<CampaignAttributes, CampaignCreationAttributes> implements CampaignAttributes {
    id: number;
    name: string;
    description?: string;
    start_date: string;
    end_date: string;
    daily_limit: number;
    daily_trigger_time: string;
    total_target: number;
    total_sent: number;
    status: 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
    last_automated_run_at?: Date | null;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default Campaign;
//# sourceMappingURL=campaign.d.ts.map