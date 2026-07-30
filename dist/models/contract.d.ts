import { Model, Optional } from 'sequelize';
interface ContractAttributes {
    id: number;
    title: string;
    type: string;
    parties: any;
    value?: number;
    status: 'signed' | 'under_review' | 'draft';
    risk_level: 'high' | 'medium' | 'low';
    expiry?: Date;
    document_content?: string;
    disclaimer?: string;
    language?: string;
    jurisdiction?: string;
    specific_terms?: string;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface ContractCreationAttributes extends Optional<ContractAttributes, 'id' | 'value' | 'expiry' | 'document_content' | 'disclaimer' | 'language' | 'jurisdiction' | 'specific_terms' | 'createdAt' | 'updatedAt'> {
}
declare class Contract extends Model<ContractAttributes, ContractCreationAttributes> implements ContractAttributes {
    id: number;
    title: string;
    type: string;
    parties: any;
    value?: number;
    status: 'signed' | 'under_review' | 'draft';
    risk_level: 'high' | 'medium' | 'low';
    expiry?: Date;
    document_content?: string;
    disclaimer?: string;
    language?: string;
    jurisdiction?: string;
    specific_terms?: string;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Contract;
//# sourceMappingURL=contract.d.ts.map