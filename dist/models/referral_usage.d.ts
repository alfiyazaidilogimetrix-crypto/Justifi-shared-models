import { Model, Optional } from 'sequelize';
export interface ReferralUsageAttributes {
    id: number;
    referral_code_id: number;
    referred_user_id: number;
    referrer_user_id: number;
    payment_id?: number | null;
    plan_id: number;
    original_amount: number;
    discounted_amount: number;
    discount_given: number;
    referrer_benefit_amount: number;
    status: 'initiated' | 'completed' | 'failed' | 'reversed';
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ReferralUsageCreationAttributes extends Optional<ReferralUsageAttributes, 'id' | 'payment_id' | 'status' | 'createdAt' | 'updatedAt'> {
}
declare class ReferralUsage extends Model<ReferralUsageAttributes, ReferralUsageCreationAttributes> implements ReferralUsageAttributes {
    id: number;
    referral_code_id: number;
    referred_user_id: number;
    referrer_user_id: number;
    payment_id: number | null;
    plan_id: number;
    original_amount: number;
    discounted_amount: number;
    discount_given: number;
    referrer_benefit_amount: number;
    status: 'initiated' | 'completed' | 'failed' | 'reversed';
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default ReferralUsage;
//# sourceMappingURL=referral_usage.d.ts.map