import sequelize from '../config/db';

// ─── Model Imports ───────────────────────────────────────────────────────────
import User, { UserAttributes, UserCreationAttributes } from './user';
import UserRecord, { UserRecordAttributes, UserRecordCreationAttributes } from './user_records';
import UserDetails from './user_details';
import Lawyer from './lawyer';
import Junior from './junior';
import LegalArea, { LegalAreaAttributes, LegalAreaCreationAttributes } from './legal_area';
import Query, { QueryAttributes, QueryCreationAttributes } from './query';
import Ticket, { TicketAttributes, TicketCreationAttributes } from './tickets';
import QueryResponse, { QueryResponseAttributes, QueryResponseCreationAttributes } from './query_response';
import Slot, { SlotAttributes, SlotCreationAttributes } from './slot';
import RylawChat, { RylawChatAttributes, RylawChatCreationAttributes } from './rylaw_chat';
import File, { FileAttributes, FileCreationAttributes } from './files';
import CompanyRegistration from './company';
import CompanyLawyer from './company_lawyer';
import Task from './tasks';
import StateData from './state_data';
import District from './district_data';
import DcAdvCase from './dc_adv_cases';
import DcCaseDetail from './dc_case_details';
import DcComplex from './dc_complex';
import DcCourt from './dc_court';
import CallLog, { CallLogAttributes, CallLogCreationAttributes } from './call_log';
import Contract from './contract';
import Message, { MessageAttributes, MessageCreationAttributes } from './message';
import { MessageReply, MessageDelete, MessageStatus } from './message_process';
import ChatGroup from './chat_group';
import GroupMember from './group_member';
import Workspace from './workspaces';
import WorkspaceMember from './team_member';
import Folder from './folder';
import FileShare from './file_share';
import IPR_Document from './ipr';
import Plan from './plan';
import Payment from './payment';
import Complaint, { ComplaintAttributes, ComplaintCreationAttributes } from './complain';
import ConsultationFeedback, { ConsultationFeedbackAttributes, ConsultationFeedbackCreationAttributes } from './consultation_feedback';

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
Lawyer.belongsTo(File, {
  foreignKey: 'bar_council_certificate',
  as: 'barCouncilCertificate',
});
Lawyer.belongsTo(File, {
  foreignKey: 'state_council_certificate',
  as: 'stateCouncilCertificate',
});
Lawyer.belongsTo(File, {
  foreignKey: 'certificate_for_practice',
  as: 'practiceCertificate',
});
Lawyer.belongsTo(File, {
  foreignKey: 'legal_undertaking',
  as: 'legalUndertaking',
});

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

Lawyer.hasMany(CompanyLawyer, {
  foreignKey: 'lawyer_id',
  as: 'CompanyLawyers',
});

CompanyLawyer.belongsTo(CompanyRegistration, {
  foreignKey: 'company_id',
  as: 'company',
});
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
Lawyer.hasMany(QueryResponse, {
  foreignKey: 'lawyer_id',
  as: 'queryResponses',
});

// ─── LegalArea ↔ Query (category) ───────────────────────────────────────────
// Query.category stores the LegalArea ID
Query.belongsTo(LegalArea, { foreignKey: 'category', as: 'legalArea' });
LegalArea.hasMany(Query, { foreignKey: 'category', as: 'queries' });

// ─── User ↔ Query ───────────────────────────────────────────────────────────
Query.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Query, { foreignKey: 'user_id', as: 'queries' });

// ─── User ↔ Ticket ──────────────────────────────────────────────────────────
Ticket.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Ticket, { foreignKey: 'user_id', as: 'tickets' });

// ─── Ticket ↔ Query ─────────────────────────────────────────────────────────
Ticket.belongsTo(Query, { foreignKey: 'query_id', as: 'query' });
Query.hasMany(Ticket, { foreignKey: 'query_id', as: 'tickets' });

// ─── ConsultationFeedback ↔ User & Lawyer ───────────────────────────────────
ConsultationFeedback.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(ConsultationFeedback, { foreignKey: 'user_id', as: 'feedbacks' });

ConsultationFeedback.belongsTo(Lawyer, { foreignKey: 'lawyer_id', as: 'lawyer' });
Lawyer.hasMany(ConsultationFeedback, { foreignKey: 'lawyer_id', as: 'feedbacks' });

// ─── User ↔ Complaint ───────────────────────────────────────────────────────
Complaint.belongsTo(User, { foreignKey: 'raised_by', as: 'raisedBy' });
User.hasMany(Complaint, { foreignKey: 'raised_by', as: 'raisedComplaints' });

Complaint.belongsTo(User, { foreignKey: 'against_user', as: 'againstUser' });
User.hasMany(Complaint, { foreignKey: 'against_user', as: 'receivedComplaints' });

// ─── CallLog associations ───────────────────────────────────────────────────
CallLog.belongsTo(User, { foreignKey: 'fromUserId', as: 'fromUser' });
CallLog.belongsTo(User, { foreignKey: 'toUserId', as: 'toUser' });

// ─── Contract associations──────────────────────────────────────────────
Contract.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Contract, { foreignKey: 'user_id', as: 'contracts' });

// ─── Message associations──────────────────────────────────────────────
Message.belongsTo(User, { foreignKey: 'sender_id', as: 'sender' });
User.hasMany(Message, { foreignKey: 'sender_id', as: 'sentMessages' });

Message.belongsTo(User, { foreignKey: 'receiver_id', as: 'receiver' });
User.hasMany(Message, { foreignKey: 'receiver_id', as: 'receivedMessages' });

Message.belongsTo(File, { foreignKey: 'file_id', as: 'file' });
File.hasMany(Message, { foreignKey: 'file_id' });

Message.belongsTo(Slot, { foreignKey: 'slot_id', as: 'slot' });
Slot.hasMany(Message, { foreignKey: 'slot_id' });

// ─── User ↔ File ─────────────────────────────────────────
User.hasMany(File, { foreignKey: 'owner_id', as: 'files' });
File.belongsTo(User, { foreignKey: 'owner_id', as: 'owner' });

Message.belongsTo(Query, { foreignKey: 'query_id' });
Query.hasMany(Message, { foreignKey: 'query_id' });
// Message ↔ MessageDelete
Message.hasMany(MessageDelete, {
  foreignKey: 'message_id',
  as: 'deletedBy',
});

MessageDelete.belongsTo(Message, {
  foreignKey: 'message_id',
});

// Message ↔ MessageReply
Message.hasMany(MessageReply, {
  foreignKey: 'parent_message_id',
  as: 'replies',
});

MessageReply.belongsTo(Message, {
  foreignKey: 'reply_message_id',
  as: 'replyMessage',
});

// Message ↔ MessageStatus
Message.hasMany(MessageStatus, {
  foreignKey: 'message_id',
  as: 'statuses',
});

MessageStatus.belongsTo(Message, {
  foreignKey: 'message_id',
});

// ─── User ↔ Plan ────────────────────────────────────────────────────────────
User.belongsTo(Plan, { foreignKey: 'plan_id', as: 'currentPlan' });
Plan.hasMany(User, { foreignKey: 'plan_id', as: 'users' });

// ─── User ↔ Payment ─────────────────────────────────────────────────────────
User.hasMany(Payment, { foreignKey: 'user_id', as: 'payments' });
Payment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── Plan ↔ Payment ─────────────────────────────────────────────────────────
Plan.hasMany(Payment, { foreignKey: 'plan_id', as: 'payments' });
Payment.belongsTo(Plan, { foreignKey: 'plan_id', as: 'plan' });

// ─── ChatGroup ↔ GroupMember ─────────────────────────────────────────────
ChatGroup.hasMany(GroupMember, {
  foreignKey: 'group_id',
  as: 'members',
});

GroupMember.belongsTo(ChatGroup, {
  foreignKey: 'group_id',
  as: 'chat_group',
});

// ─── User ↔ GroupMember ──────────────────────────────────────────────────
User.hasMany(GroupMember, { foreignKey: 'user_id', as: 'groupMemberships' });
GroupMember.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// ─── User ↔ Workspace ─────────────────────────────────────
User.hasMany(Workspace, {
  foreignKey: 'owner_id',
  as: 'workspaces',
});

Workspace.belongsTo(User, {
  foreignKey: 'owner_id',
  as: 'owner',
});
// ─── Workspace ↔ Folder ───────────────────────────────────
Workspace.hasMany(Folder, {
  foreignKey: 'workspace_id',
  as: 'folders',
});

Folder.belongsTo(Workspace, {
  foreignKey: 'workspace_id',
  as: 'workspace',
});
// ─── Folder ↔ Folder (Nested) ─────────────────────────────
Folder.hasMany(Folder, {
  foreignKey: 'parent_folder_id',
  as: 'subFolders',
});

Folder.belongsTo(Folder, {
  foreignKey: 'parent_folder_id',
  as: 'parentFolder',
});

// ─── User ↔ Folder ────────────────────────────────────────
User.hasMany(Folder, {
  foreignKey: 'created_by',
  as: 'createdFolders',
});

Folder.belongsTo(User, {
  foreignKey: 'created_by',
  as: 'creator',
});
// ─── Folder ↔ File ────────────────────────────────────────
Folder.hasMany(File, {
  foreignKey: 'folder_id',
  as: 'files',
});

File.belongsTo(Folder, {
  foreignKey: 'folder_id',
  as: 'folder',
});

// ─── Workspace ↔ File (Root level files) ──────────────────
Workspace.hasMany(File, {
  foreignKey: 'workspace_id',
  as: 'files',
});

File.belongsTo(Workspace, {
  foreignKey: 'workspace_id',
  as: 'workspace',
});

// ─── File ↔ FileShare ─────────────────────────────────────
File.hasMany(FileShare, {
  foreignKey: 'file_id',
  as: 'shares',
});

FileShare.belongsTo(File, {
  foreignKey: 'file_id',
  as: 'file',
});

// ─── User ↔ FileShare ────────────────────────────────────
User.hasMany(FileShare, { foreignKey: 'shared_by', as: 'sharesCreated' });
FileShare.belongsTo(User, { foreignKey: 'shared_by', as: 'sharer' });

User.hasMany(FileShare, { foreignKey: 'shared_with', as: 'sharesReceived' });
FileShare.belongsTo(User, { foreignKey: 'shared_with', as: 'sharedWith' });

// ─── Workspace ↔ WorkspaceMember ──────────────────────────
Workspace.hasMany(WorkspaceMember, {
  foreignKey: 'workspace_id',
  as: 'members',
});

WorkspaceMember.belongsTo(Workspace, {
  foreignKey: 'workspace_id',
  as: 'workspace',
});

// ─── User ↔ WorkspaceMember ──────────────────────────────
User.hasMany(WorkspaceMember, {
  foreignKey: 'user_id',
  as: 'workspaceMemberships',
});

WorkspaceMember.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// ─── Exports ─────────────────────────────────────────────────────────────────
export {
  sequelize,
  User, UserAttributes, UserCreationAttributes,
  UserRecord, UserRecordAttributes, UserRecordCreationAttributes,
  UserDetails,
  Lawyer,
  Junior,
  LegalArea, LegalAreaAttributes, LegalAreaCreationAttributes,
  Contract,
  Query, QueryAttributes, QueryCreationAttributes,
  Ticket, TicketAttributes, TicketCreationAttributes,
  QueryResponse, QueryResponseAttributes, QueryResponseCreationAttributes,
  Slot, SlotAttributes, SlotCreationAttributes,
  RylawChat, RylawChatAttributes, RylawChatCreationAttributes,
  File, FileAttributes, FileCreationAttributes,
  CompanyRegistration,
  CompanyRegistration as Company,
  CompanyLawyer,
  Task,
  StateData,
  District,
  DcAdvCase,
  DcCaseDetail,
  DcComplex,
  DcCourt,
  CallLog, CallLogAttributes, CallLogCreationAttributes,
  Message, MessageAttributes, MessageCreationAttributes,
  MessageReply,
  MessageDelete,
  MessageStatus,
  ChatGroup,
  GroupMember,
  Workspace,
  WorkspaceMember,
  Folder,
  FileShare,
  IPR_Document,
  Plan,
  Payment,
  Complaint, ComplaintAttributes, ComplaintCreationAttributes,
  ConsultationFeedback, ConsultationFeedbackAttributes, ConsultationFeedbackCreationAttributes,
};
