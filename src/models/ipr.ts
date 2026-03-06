import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const IPR_Document = sequelize.define('ipr_documents', {
    lawyer_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body_object: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    response_text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    document_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'ipr_documents'
});

export default IPR_Document;