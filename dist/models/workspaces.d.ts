import { Model, Optional } from 'sequelize';
export interface WorkspaceAttributes {
    id: number;
    name: string;
    description?: string;
    type: string;
    owner_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface WorkspaceCreationAttributes extends Optional<WorkspaceAttributes, 'id' | 'type' | 'description' | 'createdAt' | 'updatedAt'> {
}
declare class Workspace extends Model<WorkspaceAttributes, WorkspaceCreationAttributes> implements WorkspaceAttributes {
    id: number;
    name: string;
    type: string;
    description?: string;
    owner_id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Workspace;
//# sourceMappingURL=workspaces.d.ts.map