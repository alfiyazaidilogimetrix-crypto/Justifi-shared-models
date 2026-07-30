import { Model, Optional } from 'sequelize';
/**
 * Junior table attributes
 */
interface JuniorAttributes {
    id: number;
    user_id?: number;
    lawyer_id?: number;
}
/**
 * Attributes allowed during creation
 */
interface JuniorCreationAttributes extends Optional<JuniorAttributes, 'id' | 'user_id' | 'lawyer_id'> {
}
/**
 * Junior Model
 */
declare class Junior extends Model<JuniorAttributes, JuniorCreationAttributes> implements JuniorAttributes {
    id: number;
    user_id?: number;
    lawyer_id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Junior;
//# sourceMappingURL=junior.d.ts.map