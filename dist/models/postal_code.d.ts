import { Model, Optional } from 'sequelize';
/**
 * Postal code table attributes (GeoNames Postal Code format)
 */
export interface PostalCodeAttributes {
    id: number;
    country_code?: string;
    postal_code?: string;
    place_name?: string;
    admin_name1?: string;
    admin_code1?: string;
    admin_name2?: string;
    admin_code2?: string;
    admin_name3?: string;
    admin_code3?: string;
    latitude?: number | null;
    longitude?: number | null;
    accuracy?: number | null;
}
/**
 * Attributes allowed during creation
 */
export interface PostalCodeCreationAttributes extends Optional<PostalCodeAttributes, 'id' | 'country_code' | 'postal_code' | 'place_name' | 'admin_name1' | 'admin_code1' | 'admin_name2' | 'admin_code2' | 'admin_name3' | 'admin_code3' | 'latitude' | 'longitude' | 'accuracy'> {
}
/**
 * Postal Code Model
 */
declare class PostalCode extends Model<PostalCodeAttributes, PostalCodeCreationAttributes> implements PostalCodeAttributes {
    id: number;
    country_code?: string;
    postal_code?: string;
    place_name?: string;
    admin_name1?: string;
    admin_code1?: string;
    admin_name2?: string;
    admin_code2?: string;
    admin_name3?: string;
    admin_code3?: string;
    latitude?: number | null;
    longitude?: number | null;
    accuracy?: number | null;
}
export default PostalCode;
//# sourceMappingURL=postal_code.d.ts.map