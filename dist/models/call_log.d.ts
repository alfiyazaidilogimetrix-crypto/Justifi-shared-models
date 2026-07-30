import { Model, Optional } from 'sequelize';
export interface CallLogAttributes {
    id: number;
    fromUserId: number;
    toUserId: number;
    roomId: string;
    callType: string;
    status: 'initiated' | 'accepted' | 'rejected' | 'missed' | 'ended';
    startTime?: Date | null | undefined;
    endTime?: Date | null | undefined;
    durationSeconds?: number;
    slot_id?: number;
    call_category?: 'CONSULTATION' | 'FOLLOW_UP';
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CallLogCreationAttributes extends Optional<CallLogAttributes, 'id' | 'createdAt' | 'updatedAt' | 'slot_id' | 'call_category'> {
}
declare class CallLog extends Model<CallLogAttributes, CallLogCreationAttributes> implements CallLogAttributes {
    id: number;
    fromUserId: number;
    toUserId: number;
    roomId: string;
    callType: string;
    status: 'initiated' | 'accepted' | 'rejected' | 'missed' | 'ended';
    startTime?: Date;
    endTime?: Date;
    durationSeconds?: number;
    slot_id?: number;
    call_category?: 'CONSULTATION' | 'FOLLOW_UP';
    createdAt?: Date;
    updatedAt?: Date;
}
export default CallLog;
//# sourceMappingURL=call_log.d.ts.map