import { Model, Optional } from 'sequelize';
export interface ReferralCodeAttributes {
    id: number;
    user_id: number;
    code: string;
    state_code: string;
    city_code: string;
    discount_percentage: number;
    referrer_benefit_percentage: number;
    valid_until?: Date | null;
    is_active: boolean;
    has_seen_welcome_modal: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ReferralCodeCreationAttributes extends Optional<ReferralCodeAttributes, 'id' | 'discount_percentage' | 'referrer_benefit_percentage' | 'valid_until' | 'is_active' | 'has_seen_welcome_modal' | 'createdAt' | 'updatedAt'> {
}
declare class ReferralCode extends Model<ReferralCodeAttributes, ReferralCodeCreationAttributes> implements ReferralCodeAttributes {
    id: number;
    user_id: number;
    code: string;
    state_code: string;
    city_code: string;
    discount_percentage: number;
    referrer_benefit_percentage: number;
    valid_until: Date | null;
    is_active: boolean;
    has_seen_welcome_modal: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default ReferralCode;
//# sourceMappingURL=referral_code.d.ts.map