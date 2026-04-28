import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface ComplaintAttributes {
    id: number;
    raised_by: number;        // jisne complaint ki
    against_user: number;     // jiske against complaint hai
    title: string;
    description: string;
    attachments?: string[];
    status?: 'pending' | 'in_progress' | 'resolved' | 'rejected';
    admin_remark?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ComplaintCreationAttributes extends Optional<
    ComplaintAttributes,
    | 'id'
    | 'attachments'
    | 'status'
    | 'admin_remark'
    | 'createdAt'
    | 'updatedAt'
> { }

class Complaint
    extends Model<ComplaintAttributes, ComplaintCreationAttributes>
    implements ComplaintAttributes {

    public id!: number;
    public raised_by!: number;
    public against_user!: number;
    public title!: string;
    public description!: string;
    public attachments!: string[];
    public status!: 'pending' | 'in_progress' | 'resolved' | 'rejected';
    public admin_remark!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Complaint.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        raised_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        against_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'in_progress', 'resolved', 'rejected'),
            defaultValue: 'pending',
        },
        admin_remark: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'complaints',
        timestamps: true,
        underscored: true,
    },
);

export default Complaint;