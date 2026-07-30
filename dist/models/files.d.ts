import { Model, Optional } from 'sequelize';
export interface FileAttributes {
    id: number;
    filename: string;
    original_name: string;
    mime_type: string;
    size: number;
    file_url: string;
    folder_name: string;
    folder_id?: number;
    workspace_id?: number;
    owner_id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FileCreationAttributes extends Optional<FileAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class File extends Model<FileAttributes, FileCreationAttributes> implements FileAttributes {
    id: number;
    filename: string;
    original_name: string;
    mime_type: string;
    size: number;
    folder_name: string;
    file_url: string;
    folder_id?: number;
    workspace_id?: number;
    owner_id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default File;
//# sourceMappingURL=files.d.ts.map