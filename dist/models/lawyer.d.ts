import { Model, Optional } from 'sequelize';
/**
 * Lawyer table attributes
 */
interface LawyerAttributes {
    id: number;
    lawyer_name?: string;
    licence_no?: string;
    ratings?: number;
    cases_win?: number;
    contact_no?: string;
    judiciary_courts?: string;
    age?: number;
    email_id?: string;
    bar_council_reg_no?: string;
    bar_council_certificate?: number;
    state_council_reg_no?: string;
    state_council_certificate?: number;
    certificate_for_practice?: number;
    areas_of_expertise?: number[];
    legal_undertaking?: number;
    pan_number?: string;
    aadhar_number?: string;
    bank_account_number?: string;
    ifsc_code?: string;
    upi_id?: string;
    documents_uploaded?: boolean;
    pan_verified?: boolean;
    aadhar_verified?: boolean;
    is_verified?: boolean;
    district_data_id?: string[];
    state_id?: string[];
    languages_known?: string[];
    court_type?: string;
    international_litigation_experience?: string;
    plan?: string;
    mobile_no?: string;
    dob?: Date;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    address_line1?: string;
    address_line2?: string;
    landmark?: string;
    alternate_mobile_no?: string;
    digital_pin?: string;
    user_id: number;
    Qualification?: string;
    experience?: string;
}
/**
 * Attributes allowed during creation
 */
interface LawyerCreationAttributes extends Optional<LawyerAttributes, 'id' | 'lawyer_name' | 'licence_no' | 'ratings' | 'cases_win' | 'contact_no' | 'judiciary_courts' | 'age' | 'email_id' | 'bar_council_reg_no' | 'bar_council_certificate' | 'state_council_reg_no' | 'state_council_certificate' | 'certificate_for_practice' | 'areas_of_expertise' | 'legal_undertaking' | 'pan_number' | 'aadhar_number' | 'bank_account_number' | 'ifsc_code' | 'upi_id' | 'documents_uploaded' | 'pan_verified' | 'aadhar_verified' | 'is_verified' | 'district_data_id' | 'state_id' | 'languages_known' | 'court_type' | 'international_litigation_experience' | 'plan' | 'mobile_no' | 'dob' | 'address' | 'pincode' | 'city' | 'state' | 'address_line1' | 'address_line2' | 'landmark' | 'alternate_mobile_no' | 'digital_pin' | 'Qualification' | 'experience'> {
}
/**
 * Lawyer Model
 */
declare class Lawyer extends Model<LawyerAttributes, LawyerCreationAttributes> implements LawyerAttributes {
    id: number;
    lawyer_name?: string;
    licence_no?: string;
    ratings?: number;
    cases_win?: number;
    contact_no?: string;
    judiciary_courts?: string;
    age?: number;
    email_id?: string;
    bar_council_reg_no?: string;
    bar_council_certificate?: number;
    state_council_reg_no?: string;
    state_council_certificate?: number;
    certificate_for_practice?: number;
    areas_of_expertise?: number[];
    legal_undertaking?: number;
    pan_number?: string;
    aadhar_number?: string;
    bank_account_number?: string;
    ifsc_code?: string;
    upi_id?: string;
    documents_uploaded?: boolean;
    pan_verified?: boolean;
    aadhar_verified?: boolean;
    is_verified?: boolean;
    district_data_id?: string[];
    state_id?: string[];
    languages_known?: string[];
    court_type?: string;
    international_litigation_experience?: string;
    plan?: string;
    mobile_no?: string;
    dob?: Date;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    address_line1?: string;
    address_line2?: string;
    landmark?: string;
    alternate_mobile_no?: string;
    digital_pin?: string;
    user_id: number;
    Qualification?: string;
    experience?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Lawyer;
//# sourceMappingURL=lawyer.d.ts.map