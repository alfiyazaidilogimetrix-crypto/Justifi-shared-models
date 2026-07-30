import { Model, Optional } from 'sequelize';
/**
 * DC Case Detail table attributes
 */
interface DcCaseDetailAttributes {
    id: number;
    cnr: string;
    title?: string;
    actsAndSections?: object;
    details?: object;
    firstInformationReport?: object;
    history?: object;
    orders?: object;
    parties?: object;
    status?: object;
    case_status?: string;
    adv_cases_id: number;
    raw?: object;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Attributes allowed during creation
 */
interface DcCaseDetailCreationAttributes extends Optional<DcCaseDetailAttributes, 'id' | 'title' | 'actsAndSections' | 'details' | 'firstInformationReport' | 'history' | 'orders' | 'parties' | 'status' | 'case_status' | 'raw'> {
}
/**
 * DcCaseDetail Model
 */
declare class DcCaseDetail extends Model<DcCaseDetailAttributes, DcCaseDetailCreationAttributes> implements DcCaseDetailAttributes {
    id: number;
    cnr: string;
    title?: string;
    actsAndSections?: object;
    details?: object;
    firstInformationReport?: object;
    history?: object;
    orders?: object;
    parties?: object;
    status?: object;
    case_status?: string;
    adv_cases_id: number;
    raw?: object;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default DcCaseDetail;
//# sourceMappingURL=dc_case_details.d.ts.map