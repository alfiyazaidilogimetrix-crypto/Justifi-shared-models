import { Model, Optional } from 'sequelize';
export interface PriorityConsultationAttributes {
    id: number;
    user_id: number;
    session_id: string;
    lawyer_ids: number[];
    current_priority_index: number;
    status: 'SEARCHING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';
    accepted_lawyer_id?: number | null;
    created_at?: Date;
    updated_at?: Date;
}
export interface PriorityConsultationCreationAttributes extends Optional<PriorityConsultationAttributes, 'id' | 'current_priority_index' | 'status' | 'accepted_lawyer_id' | 'created_at' | 'updated_at'> {
}
declare class PriorityConsultation extends Model<PriorityConsultationAttributes, PriorityConsultationCreationAttributes> implements PriorityConsultationAttributes {
    id: number;
    user_id: number;
    session_id: string;
    lawyer_ids: number[];
    current_priority_index: number;
    status: 'SEARCHING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';
    accepted_lawyer_id: number | null;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default PriorityConsultation;
//# sourceMappingURL=priority_consultation.d.ts.map