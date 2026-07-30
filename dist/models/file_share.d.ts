import { Model, Optional } from 'sequelize';
export interface FileShareAttributes {
    id: number;
    file_id: number;
    shared_by: number;
    shared_with: number;
    access_type: 'view' | 'download' | 'edit';
    expires_at?: Date | null;
    is_active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FileShareCreationAttributes extends Optional<FileShareAttributes, 'id' | 'expires_at' | 'is_active' | 'createdAt' | 'updatedAt'> {
}
declare class FileShare extends Model<FileShareAttributes, FileShareCreationAttributes> implements FileShareAttributes {
    id: number;
    file_id: number;
    shared_by: number;
    shared_with: number;
    access_type: 'view' | 'download' | 'edit';
    expires_at?: Date | null;
    is_active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default FileShare;
//# sourceMappingURL=file_share.d.ts.map