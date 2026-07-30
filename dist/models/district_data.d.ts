import { Model, Optional } from 'sequelize';
/**
 * District table attributes
 */
interface DistrictAttributes {
    id: number;
    name?: string;
    district_id?: string;
    state_id?: string;
    own_state_id?: number;
}
/**
 * Attributes allowed during creation
 */
interface DistrictCreationAttributes extends Optional<DistrictAttributes, 'id' | 'name' | 'district_id' | 'state_id' | 'own_state_id'> {
}
/**
 * District Model
 */
declare class District extends Model<DistrictAttributes, DistrictCreationAttributes> implements DistrictAttributes {
    id: number;
    name?: string;
    district_id?: string;
    state_id?: string;
    own_state_id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default District;
//# sourceMappingURL=district_data.d.ts.map