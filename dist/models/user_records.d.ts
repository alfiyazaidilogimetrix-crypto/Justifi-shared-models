import { Model, Optional } from 'sequelize';
export interface UserRecordAttributes {
    id: number;
    user_id: number;
    first_name?: string;
    last_name?: string;
    time?: string;
    status: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
    is_recharge: boolean;
    is_package: boolean;
    emergency_plan_used: boolean;
    package_validity?: Date;
    plan_id?: number;
    total_minutes?: number;
    bonus_minutes?: number;
    used_minutes?: number;
    remaining_minutes?: number;
    valid_from?: Date;
    valid_till?: Date;
    duration_type?: 'MINUTES' | 'MONTHLY' | 'YEARLY';
    payment_id?: string;
    payment_status?: 'SUCCESS' | 'FAILED' | 'PENDING';
    is_trial_buy?: boolean;
    plan_purchased_count?: number;
    created_at?: Date;
    updated_at?: Date;
}
export interface UserRecordCreationAttributes extends Optional<UserRecordAttributes, 'id' | 'status' | 'is_recharge' | 'is_package' | 'emergency_plan_used' | 'package_validity' | 'plan_id' | 'total_minutes' | 'bonus_minutes' | 'used_minutes' | 'remaining_minutes' | 'valid_from' | 'valid_till' | 'duration_type' | 'payment_id' | 'payment_status' | 'is_trial_buy' | 'plan_purchased_count' | 'created_at' | 'updated_at'> {
}
declare class UserRecord extends Model<UserRecordAttributes, UserRecordCreationAttributes> implements UserRecordAttributes {
    id: number;
    user_id: number;
    first_name?: string;
    last_name?: string;
    time?: string;
    status: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
    is_recharge: boolean;
    is_package: boolean;
    package_validity?: Date;
    plan_id?: number;
    total_minutes?: number;
    bonus_minutes?: number;
    used_minutes?: number;
    remaining_minutes?: number;
    valid_from?: Date;
    valid_till?: Date;
    duration_type?: 'MINUTES' | 'MONTHLY' | 'YEARLY';
    payment_id?: string;
    payment_status?: 'SUCCESS' | 'FAILED' | 'PENDING';
    is_trial_buy?: boolean;
    emergency_plan_used: boolean;
    plan_purchased_count?: number;
    created_at?: Date;
    updated_at?: Date;
}
export default UserRecord;
//# sourceMappingURL=user_records.d.ts.map