import { Model, Optional } from 'sequelize';
interface GroupMemberAttributes {
    id: number;
    group_id: number;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface GroupMemberCreationAttributes extends Optional<GroupMemberAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class GroupMember extends Model<GroupMemberAttributes, GroupMemberCreationAttributes> implements GroupMemberAttributes {
    id: number;
    group_id: number;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default GroupMember;
//# sourceMappingURL=group_member.d.ts.map