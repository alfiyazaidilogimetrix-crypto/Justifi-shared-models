import { Model, Optional } from 'sequelize';
/**
 * DC Court table attributes
 */
interface DcCourtAttributes {
    id: number;
    name?: string;
    d_court_id?: string;
    state_id?: string;
    district_id?: string;
    own_state_id?: number;
    own_district_id?: number;
    own_complex_id?: number;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Attributes allowed during creation
 */
interface DcCourtCreationAttributes extends Optional<DcCourtAttributes, 'id' | 'name' | 'd_court_id' | 'state_id' | 'district_id' | 'own_state_id' | 'own_district_id' | 'own_complex_id'> {
}
/**
 * DcCourt Model
 */
declare class DcCourt extends Model<DcCourtAttributes, DcCourtCreationAttributes> implements DcCourtAttributes {
    id: number;
    name?: string;
    d_court_id?: string;
    state_id?: string;
    district_id?: string;
    own_state_id?: number;
    own_district_id?: number;
    own_complex_id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default DcCourt;
//# sourceMappingURL=dc_court.d.ts.map