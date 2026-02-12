import sequelize from '../config/db';

// ─── Model Imports ───────────────────────────────────────────────────────────
import User from './user';
import UserRecord from './user_records';
import UserDetails from './user_details';
import Lawyer from './lawyer';
import Junior from './junior';
import LegalArea from './legal_area';
import Query from './query';
import QueryResponse from './query_response';
import Slot from './slot';
import RylawChat from './rylaw_chat';
import File from './files';
import CompanyRegistration from './company';
import CompanyLawyer from './company_lawyer';
import Task from './tasks';
import StateData from './state_data';
import District from './district_data';
import DcAdvCase from './dc_adv_cases';
import DcCaseDetail from './dc_case_details';
import DcComplex from './dc_complex';
import DcCourt from './dc_court';

// ─── User ↔ UserRecord ──────────────────────────────────────────────────────
User.hasOne(UserRecord, { foreignKey: 'user_id', as: 'userRecord' });
UserRecord.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── User ↔ UserDetails ─────────────────────────────────────────────────────
User.hasOne(UserDetails, { foreignKey: 'user_id', as: 'userDetails' });
UserDetails.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── User ↔ Lawyer ──────────────────────────────────────────────────────────
User.hasOne(Lawyer, { foreignKey: 'user_id', as: 'lawyer' });
Lawyer.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── Lawyer ↔ Junior ────────────────────────────────────────────────────────
Lawyer.hasMany(Junior, { foreignKey: 'lawyer_id', as: 'assignedJuniors' });
Junior.belongsTo(Lawyer, { foreignKey: 'lawyer_id', as: 'assignedLawyer' });

// ─── User ↔ Junior ──────────────────────────────────────────────────────────
User.hasMany(Junior, { foreignKey: 'user_id', as: 'juniors' });
Junior.belongsTo(User, { foreignKey: 'user_id', as: 'junior' });

// ─── Lawyer ↔ File (documents) ──────────────────────────────────────────────
Lawyer.belongsTo(File, { foreignKey: 'bar_council_certificate', as: 'barCouncilCertificate' });
Lawyer.belongsTo(File, { foreignKey: 'state_council_certificate', as: 'stateCouncilCertificate' });
Lawyer.belongsTo(File, { foreignKey: 'certificate_for_practice', as: 'practiceCertificate' });
Lawyer.belongsTo(File, { foreignKey: 'legal_undertaking', as: 'legalUndertaking' });

// ─── Company ↔ Lawyer (many-to-many via CompanyLawyer) ──────────────────────
CompanyRegistration.belongsToMany(Lawyer, {
  through: CompanyLawyer,
  foreignKey: 'company_id',
  otherKey: 'lawyer_id',
  as: 'lawyers',
});

Lawyer.belongsToMany(CompanyRegistration, {
  through: CompanyLawyer,
  foreignKey: 'lawyer_id',
  otherKey: 'company_id',
  as: 'companies',
});

CompanyLawyer.belongsTo(CompanyRegistration, { foreignKey: 'company_id', as: 'company' });
CompanyLawyer.belongsTo(Lawyer, { foreignKey: 'lawyer_id', as: 'lawyer' });

// ─── User ↔ Task ────────────────────────────────────────────────────────────
User.hasMany(Task, { foreignKey: 'user_id', as: 'tasks' });
Task.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── State ↔ District ───────────────────────────────────────────────────────
StateData.hasMany(District, { foreignKey: 'own_state_id', as: 'districts' });
District.belongsTo(StateData, { foreignKey: 'own_state_id', as: 'state' });

// ─── Slot associations ──────────────────────────────────────────────────────
Slot.belongsTo(User, { foreignKey: 'fromUser', as: 'from_user' });
Slot.belongsTo(User, { foreignKey: 'toUser', as: 'to_user' });
Slot.belongsTo(Query, { foreignKey: 'query_id', as: 'query' });

// ─── RylawChat ↔ File ───────────────────────────────────────────────────────
RylawChat.belongsTo(File, {
  foreignKey: 'file_id',
  as: 'file',
  constraints: false,
});

File.hasMany(RylawChat, {
  foreignKey: 'file_id',
  as: 'chats',
  constraints: false,
});

// ─── RylawChat ↔ Slot ───────────────────────────────────────────────────────
RylawChat.belongsTo(Slot, {
  foreignKey: 'slot_id',
  as: 'slot',
  constraints: false,
});

Slot.hasMany(RylawChat, {
  foreignKey: 'slot_id',
  as: 'chats',
  constraints: false,
});

// ─── RylawChat ↔ User (sender / receiver) ───────────────────────────────────
RylawChat.belongsTo(User, {
  foreignKey: 'sender_id',
  as: 'sender',
  constraints: false,
});

RylawChat.belongsTo(User, {
  foreignKey: 'receiver_id',
  as: 'receiver',
  constraints: false,
});

// ─── UserRecord ↔ CallLog ───────────────────────────────────────────────────
// CallLog model is currently empty – associations will be added once it is defined.

// ─── QueryResponse ↔ Query & Lawyer ─────────────────────────────────────────
QueryResponse.belongsTo(Query, { foreignKey: 'query_id', as: 'query' });
Query.hasMany(QueryResponse, { foreignKey: 'query_id', as: 'responses' });

QueryResponse.belongsTo(Lawyer, { foreignKey: 'lawyer_id', as: 'lawyer' });
Lawyer.hasMany(QueryResponse, { foreignKey: 'lawyer_id', as: 'queryResponses' });

// ─── LegalArea ↔ Query (category) ───────────────────────────────────────────
// Query.category stores the LegalArea ID
Query.belongsTo(LegalArea, { foreignKey: 'category', as: 'legalArea' });
LegalArea.hasMany(Query, { foreignKey: 'category', as: 'queries' });

// ─── Exports ─────────────────────────────────────────────────────────────────
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
};
