import { Model, Optional } from 'sequelize';
/**
 * User table attributes
 */
export interface UserAttributes {
    user_id: number;
    username: string;
    email: string;
    encrypted_password?: string;
    master_password?: string;
    user_type?: string;
    plan_id?: number;
    parent_user_id?: number;
    firm_id?: number;
    subscription_status?: boolean;
    subscription_date?: Date;
    googleId?: string;
    district_data_id?: string[];
    state_id?: string[];
    is_blocked?: boolean;
    block_reason?: string;
    blocked_at?: Date;
}
/**
 * Attributes allowed during creation
 */
export interface UserCreationAttributes extends Optional<UserAttributes, 'user_id' | 'encrypted_password' | 'master_password' | 'user_type' | 'plan_id' | 'parent_user_id' | 'firm_id' | 'subscription_status' | 'subscription_date' | 'googleId' | 'district_data_id' | 'state_id' | 'is_blocked' | 'block_reason' | 'blocked_at'> {
}
/**
 * User Model
 */
declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    user_id: number;
    username: string;
    email: string;
    encrypted_password?: string;
    master_password?: string;
    user_type?: string;
    plan_id?: number;
    parent_user_id?: number;
    firm_id?: number;
    subscription_status?: boolean;
    subscription_date?: Date;
    googleId?: string;
    district_data_id?: string[];
    state_id?: string[];
    is_blocked?: boolean;
    block_reason?: string;
    blocked_at?: Date;
}
export default User;
//# sourceMappingURL=user.d.ts.map