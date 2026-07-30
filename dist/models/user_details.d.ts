import { Model, Optional } from 'sequelize';
/**
 * UserDetails table attributes
 */
interface UserDetailsAttributes {
    id: number;
    contact_no?: string;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    landmark?: string;
    alternate_mobile_no?: string;
    user_id: number;
}
/**
 * Attributes allowed during creation
 */
interface UserDetailsCreationAttributes extends Optional<UserDetailsAttributes, 'id' | 'contact_no' | 'address' | 'pincode' | 'city' | 'state' | 'landmark' | 'alternate_mobile_no'> {
}
/**
 * UserDetails Model
 */
declare class UserDetails extends Model<UserDetailsAttributes, UserDetailsCreationAttributes> implements UserDetailsAttributes {
    id: number;
    contact_no?: string;
    address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    landmark?: string;
    alternate_mobile_no?: string;
    user_id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default UserDetails;
//# sourceMappingURL=user_details.d.ts.map