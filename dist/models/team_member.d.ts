import { Model, Optional } from 'sequelize';
export interface WorkspaceMemberAttributes {
    id: number;
    workspace_id: number;
    user_id: number;
    role: 'admin' | 'editor' | 'viewer';
    createdAt?: Date;
    updatedAt?: Date;
}
export interface WorkspaceMemberCreationAttributes extends Optional<WorkspaceMemberAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class WorkspaceMember extends Model<WorkspaceMemberAttributes, WorkspaceMemberCreationAttributes> implements WorkspaceMemberAttributes {
    id: number;
    workspace_id: number;
    user_id: number;
    role: 'admin' | 'editor' | 'viewer';
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default WorkspaceMember;
//# sourceMappingURL=team_member.d.ts.map