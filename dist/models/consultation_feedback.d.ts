import { Model, Optional } from 'sequelize';
export interface ConsultationFeedbackAttributes {
    id: number;
    user_id: number;
    lawyer_id: number;
    overall_rating: number;
    consultation_quality?: number;
    lawyer_professionalism?: number;
    response_time_rating?: number;
    issue_resolved?: boolean;
    would_recommend?: boolean;
    feedback?: string;
    suggestions?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ConsultationFeedbackCreationAttributes extends Optional<ConsultationFeedbackAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class ConsultationFeedback extends Model<ConsultationFeedbackAttributes, ConsultationFeedbackCreationAttributes> implements ConsultationFeedbackAttributes {
    id: number;
    user_id: number;
    lawyer_id: number;
    overall_rating: number;
    consultation_quality?: number;
    lawyer_professionalism?: number;
    response_time_rating?: number;
    issue_resolved?: boolean;
    would_recommend?: boolean;
    feedback?: string;
    suggestions?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default ConsultationFeedback;
//# sourceMappingURL=consultation_feedback.d.ts.map