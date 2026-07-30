import { Model, Optional } from 'sequelize';
export interface DateAndTime {
    date: string;
    time: string;
}
export interface SlotAttributes {
    id: number;
    title: string;
    query_id: number;
    isExpire: boolean;
    dateAndTime: DateAndTime[];
    fromUser: number;
    toUser: number;
    consultationStatus?: 'PENDING' | 'BOOKED' | 'RESCHEDULED' | 'SATISFIED' | 'UNSATISFIED' | 'AUTO_SATISFIED' | 'ACCEPTED' | 'REJECTED';
    totalCallDuration?: number;
    payoutStatus?: 'PENDING' | 'SUCCESS' | 'FAILED';
    follow_up_enabled?: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export interface SlotCreationAttributes extends Optional<SlotAttributes, 'id' | 'isExpire' | 'created_at' | 'updated_at' | 'consultationStatus' | 'totalCallDuration' | 'payoutStatus' | 'follow_up_enabled'> {
}
declare class Slot extends Model<SlotAttributes, SlotCreationAttributes> implements SlotAttributes {
    id: number;
    title: string;
    query_id: number;
    isExpire: boolean;
    dateAndTime: DateAndTime[];
    fromUser: number;
    toUser: number;
    consultationStatus?: 'PENDING' | 'BOOKED' | 'RESCHEDULED' | 'SATISFIED' | 'UNSATISFIED' | 'AUTO_SATISFIED' | 'ACCEPTED' | 'REJECTED';
    totalCallDuration?: number;
    payoutStatus?: 'PENDING' | 'SUCCESS' | 'FAILED';
    follow_up_enabled?: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export default Slot;
//# sourceMappingURL=slot.d.ts.map