import { Model, Optional } from 'sequelize';
export interface LegalAreaAttributes {
    id: number;
    legal_area: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface LegalAreaCreationAttributes extends Optional<LegalAreaAttributes, 'id' | 'legal_area' | 'createdAt' | 'updatedAt'> {
}
declare class LegalArea extends Model<LegalAreaAttributes, LegalAreaCreationAttributes> implements LegalAreaAttributes {
    id: number;
    legal_area: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default LegalArea;
//# sourceMappingURL=legal_area.d.ts.map