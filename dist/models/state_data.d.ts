import { Model, Optional } from 'sequelize';
/**
 * State table attributes
 */
interface StateAttributes {
    id: number;
    name?: string;
    state_id?: string;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Attributes allowed during creation
 */
interface StateCreationAttributes extends Optional<StateAttributes, 'id' | 'name' | 'state_id'> {
}
/**
 * State Model
 */
declare class StateData extends Model<StateAttributes, StateCreationAttributes> implements StateAttributes {
    id: number;
    name?: string;
    state_id?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default StateData;
//# sourceMappingURL=state_data.d.ts.map