import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Company–Lawyer mapping table attributes
 */
interface CompanyLawyerAttributes {
  id: number;
  company_id?: number;
  lawyer_id?: number;
}

/**
 * Attributes allowed during creation
 */
interface CompanyLawyerCreationAttributes extends Optional<
  CompanyLawyerAttributes,
  'id' | 'company_id' | 'lawyer_id'
> {}

/**
 * CompanyLawyer Model
 */
class CompanyLawyer
  extends Model<CompanyLawyerAttributes, CompanyLawyerCreationAttributes>
  implements CompanyLawyerAttributes
{
  public id!: number;
  public company_id?: number;
  public lawyer_id?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CompanyLawyer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'company_lawyers',
    timestamps: true,
  },
);

export default CompanyLawyer;
