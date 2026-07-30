import { Model, Optional } from 'sequelize';
export interface FolderAttributes {
    id: number;
    name: string;
    workspace_id?: number | null;
    parent_folder_id?: number | null;
    created_by: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FolderCreationAttributes extends Optional<FolderAttributes, 'id' | 'workspace_id' | 'parent_folder_id' | 'createdAt' | 'updatedAt'> {
}
declare class Folder extends Model<FolderAttributes, FolderCreationAttributes> implements FolderAttributes {
    id: number;
    name: string;
    workspace_id?: number | null;
    parent_folder_id?: number | null;
    created_by: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Folder;
//# sourceMappingURL=folder.d.ts.map