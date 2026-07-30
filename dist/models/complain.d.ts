import { Model, Optional } from 'sequelize';
export interface ComplaintAttributes {
    id: number;
    raised_by: number;
    against_user: number;
    title: string;
    description: string;
    attachments?: string[];
    status?: 'pending' | 'in_progress' | 'resolved' | 'rejected';
    admin_remark?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ComplaintCreationAttributes extends Optional<ComplaintAttributes, 'id' | 'attachments' | 'status' | 'admin_remark' | 'createdAt' | 'updatedAt'> {
}
declare class Complaint extends Model<ComplaintAttributes, ComplaintCreationAttributes> implements ComplaintAttributes {
    id: number;
    raised_by: number;
    against_user: number;
    title: string;
    description: string;
    attachments: string[];
    status: 'pending' | 'in_progress' | 'resolved' | 'rejected';
    admin_remark: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Complaint;
//# sourceMappingURL=complain.d.ts.map