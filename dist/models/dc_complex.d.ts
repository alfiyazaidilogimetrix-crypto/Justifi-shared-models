import { Model, Optional } from 'sequelize';
/**
 * DC Complex table attributes
 */
interface DcComplexAttributes {
    id: number;
    name?: string;
    complex_id?: string;
    state_id?: string;
    district_id?: string;
    own_state_id?: number;
    own_district_id?: number;
    est_code?: string;
    source?: string;
    raw?: object;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Attributes allowed during creation
 */
interface DcComplexCreationAttributes extends Optional<DcComplexAttributes, 'id' | 'name' | 'complex_id' | 'state_id' | 'district_id' | 'own_state_id' | 'own_district_id' | 'est_code' | 'source' | 'raw'> {
}
/**
 * DcComplex Model
 */
declare class DcComplex extends Model<DcComplexAttributes, DcComplexCreationAttributes> implements DcComplexAttributes {
    id: number;
    name?: string;
    complex_id?: string;
    state_id?: string;
    district_id?: string;
    own_state_id?: number;
    own_district_id?: number;
    est_code?: string;
    source?: string;
    raw?: object;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default DcComplex;
//# sourceMappingURL=dc_complex.d.ts.map