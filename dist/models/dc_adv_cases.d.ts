import { Model, Optional } from 'sequelize';
/**
 * DC Advocate Case table attributes
 */
interface DcAdvCaseAttributes {
    id: number;
    cnr?: string;
    title?: string;
    date_of_decision?: string;
    case_number?: string;
    filing_number?: string;
    filing_year?: string;
    type?: string;
    own_district_id?: number;
    district_id?: string;
    advocate_name?: string;
    raw?: object;
    complex_id?: string;
    own_complex_id?: number;
    state_id?: string;
    own_state_id?: number;
    bar_state?: string;
    bar_code?: string;
    bar_year?: string;
    search_type?: string;
    lawyer_id?: number;
    request_id?: string;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Attributes allowed during creation
 */
interface DcAdvCaseCreationAttributes extends Optional<DcAdvCaseAttributes, 'id' | 'cnr' | 'title' | 'date_of_decision' | 'case_number' | 'filing_number' | 'filing_year' | 'type' | 'own_district_id' | 'district_id' | 'advocate_name' | 'raw' | 'complex_id' | 'own_complex_id' | 'state_id' | 'own_state_id' | 'bar_state' | 'bar_code' | 'bar_year' | 'search_type' | 'lawyer_id' | 'request_id'> {
}
/**
 * DcAdvCase Model
 */
declare class DcAdvCase extends Model<DcAdvCaseAttributes, DcAdvCaseCreationAttributes> implements DcAdvCaseAttributes {
    id: number;
    cnr?: string;
    title?: string;
    date_of_decision?: string;
    case_number?: string;
    filing_number?: string;
    filing_year?: string;
    type?: string;
    own_district_id?: number;
    district_id?: string;
    advocate_name?: string;
    raw?: object;
    complex_id?: string;
    own_complex_id?: number;
    state_id?: string;
    own_state_id?: number;
    bar_state?: string;
    bar_code?: string;
    bar_year?: string;
    search_type?: string;
    lawyer_id?: number;
    request_id?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default DcAdvCase;
//# sourceMappingURL=dc_adv_cases.d.ts.map