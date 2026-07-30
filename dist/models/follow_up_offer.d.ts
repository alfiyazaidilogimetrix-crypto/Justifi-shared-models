import { Model, Optional } from 'sequelize';
export interface FollowUpOfferAttributes {
    id: number;
    slot_id: number;
    reason?: string;
    time: Date;
    expiry: Date;
    is_used: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export interface FollowUpOfferCreationAttributes extends Optional<FollowUpOfferAttributes, 'id' | 'is_used' | 'created_at' | 'updated_at'> {
}
declare class FollowUpOffer extends Model<FollowUpOfferAttributes, FollowUpOfferCreationAttributes> implements FollowUpOfferAttributes {
    id: number;
    slot_id: number;
    reason?: string;
    time: Date;
    expiry: Date;
    is_used: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export default FollowUpOffer;
//# sourceMappingURL=follow_up_offer.d.ts.map