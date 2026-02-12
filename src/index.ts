// Main entry point — re-export models, sequelize instance, and utilities
export {
  sequelize,
  User,
  UserRecord,
  UserDetails,
  Lawyer,
  Junior,
  LegalArea,
  Query,
  QueryResponse,
  Slot,
  RylawChat,
  File,
  CompanyRegistration,
  CompanyLawyer,
  Task,
  StateData,
  District,
  DcAdvCase,
  DcCaseDetail,
  DcComplex,
  DcCourt,
} from './models';

export { TestConnection } from './config/db';
