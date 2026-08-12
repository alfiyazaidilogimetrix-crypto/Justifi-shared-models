import { Model, Optional } from 'sequelize';
/**
 * Allowed company types
 */
export declare enum CompanyType {
    PRIVATE_LIMITED = "Private Limited",
    PUBLIC_LIMITED = "Public Limited",
    LLP = "LLP",
    LLC = "LLC",
    OPC = "OPC",
    PARTNERSHIP = "Partnership",
    PROPRIETORSHIP = "Proprietorship"
}
/**
 * Company table attributes
 */
interface CompanyAttributes {
    id: number;
    company_name: string;
    company_type: CompanyType;
    registration_number?: string;
    pan_number?: string;
    gst_number?: string;
    incorporation_date?: Date;
    registered_address: string;
    district_data_id?: string[];
    state_id?: string[];
    contact_email: string;
    contact_phone: string;
    is_claimed_itc?: boolean;
    digital_pin?: string;
    user_id: number;
}
/**
 * Attributes allowed during creation
 */
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id' | 'registration_number' | 'pan_number' | 'gst_number' | 'incorporation_date' | 'district_data_id' | 'state_id' | 'is_claimed_itc' | 'digital_pin'> {
}
/**
 * Company Model
 */
declare class CompanyRegistration extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    id: number;
    company_name: string;
    company_type: CompanyType;
    registration_number?: string;
    pan_number?: string;
    gst_number?: string;
    incorporation_date?: Date;
    registered_address: string;
    district_data_id?: string[];
    state_id?: string[];
    contact_email: string;
    contact_phone: string;
    is_claimed_itc?: boolean;
    digital_pin?: string;
    user_id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default CompanyRegistration;
//# sourceMappingURL=company.d.ts.map