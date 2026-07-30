import { Model, Optional } from 'sequelize';
/**
 * Company–Lawyer mapping table attributes
 */
interface CompanyLawyerAttributes {
    id: number;
    company_id?: number;
    lawyer_id?: number;
}
/**
 * Attributes allowed during creation
 */
interface CompanyLawyerCreationAttributes extends Optional<CompanyLawyerAttributes, 'id' | 'company_id' | 'lawyer_id'> {
}
/**
 * CompanyLawyer Model
 */
declare class CompanyLawyer extends Model<CompanyLawyerAttributes, CompanyLawyerCreationAttributes> implements CompanyLawyerAttributes {
    id: number;
    company_id?: number;
    lawyer_id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default CompanyLawyer;
//# sourceMappingURL=company_lawyer.d.ts.map