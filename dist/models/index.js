"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = exports.FollowUpOffer = exports.ConsultationFeedback = exports.Complaint = exports.Payment = exports.Plan = exports.IPR_Document = exports.FileShare = exports.Folder = exports.WorkspaceMember = exports.Workspace = exports.GroupMember = exports.ChatGroup = exports.MessageStatus = exports.MessageDelete = exports.MessageReply = exports.Message = exports.CallLog = exports.DcCourt = exports.DcComplex = exports.DcCaseDetail = exports.DcAdvCase = exports.District = exports.StateData = exports.Task = exports.CompanyLawyer = exports.Company = exports.CompanyRegistration = exports.File = exports.RylawChat = exports.Slot = exports.QueryResponse = exports.Ticket = exports.Query = exports.Contract = exports.LegalArea = exports.Junior = exports.Lawyer = exports.UserDetails = exports.UserRecord = exports.User = exports.sequelize = void 0;
const db_1 = __importDefault(require("../config/db"));
exports.sequelize = db_1.default;
// ─── Model Imports ───────────────────────────────────────────────────────────
const user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
const user_records_1 = __importDefault(require("./user_records"));
exports.UserRecord = user_records_1.default;
const user_details_1 = __importDefault(require("./user_details"));
exports.UserDetails = user_details_1.default;
const lawyer_1 = __importDefault(require("./lawyer"));
exports.Lawyer = lawyer_1.default;
const junior_1 = __importDefault(require("./junior"));
exports.Junior = junior_1.default;
const legal_area_1 = __importDefault(require("./legal_area"));
exports.LegalArea = legal_area_1.default;
const query_1 = __importDefault(require("./query"));
exports.Query = query_1.default;
const tickets_1 = __importDefault(require("./tickets"));
exports.Ticket = tickets_1.default;
const query_response_1 = __importDefault(require("./query_response"));
exports.QueryResponse = query_response_1.default;
const slot_1 = __importDefault(require("./slot"));
exports.Slot = slot_1.default;
const rylaw_chat_1 = __importDefault(require("./rylaw_chat"));
exports.RylawChat = rylaw_chat_1.default;
const files_1 = __importDefault(require("./files"));
exports.File = files_1.default;
const company_1 = __importDefault(require("./company"));
exports.CompanyRegistration = company_1.default;
exports.Company = company_1.default;
const company_lawyer_1 = __importDefault(require("./company_lawyer"));
exports.CompanyLawyer = company_lawyer_1.default;
const tasks_1 = __importDefault(require("./tasks"));
exports.Task = tasks_1.default;
const state_data_1 = __importDefault(require("./state_data"));
exports.StateData = state_data_1.default;
const district_data_1 = __importDefault(require("./district_data"));
exports.District = district_data_1.default;
const dc_adv_cases_1 = __importDefault(require("./dc_adv_cases"));
exports.DcAdvCase = dc_adv_cases_1.default;
const dc_case_details_1 = __importDefault(require("./dc_case_details"));
exports.DcCaseDetail = dc_case_details_1.default;
const dc_complex_1 = __importDefault(require("./dc_complex"));
exports.DcComplex = dc_complex_1.default;
const dc_court_1 = __importDefault(require("./dc_court"));
exports.DcCourt = dc_court_1.default;
const call_log_1 = __importDefault(require("./call_log"));
exports.CallLog = call_log_1.default;
const contract_1 = __importDefault(require("./contract"));
exports.Contract = contract_1.default;
const message_1 = __importDefault(require("./message"));
exports.Message = message_1.default;
const message_process_1 = require("./message_process");
Object.defineProperty(exports, "MessageReply", { enumerable: true, get: function () { return message_process_1.MessageReply; } });
Object.defineProperty(exports, "MessageDelete", { enumerable: true, get: function () { return message_process_1.MessageDelete; } });
Object.defineProperty(exports, "MessageStatus", { enumerable: true, get: function () { return message_process_1.MessageStatus; } });
const chat_group_1 = __importDefault(require("./chat_group"));
exports.ChatGroup = chat_group_1.default;
const group_member_1 = __importDefault(require("./group_member"));
exports.GroupMember = group_member_1.default;
const workspaces_1 = __importDefault(require("./workspaces"));
exports.Workspace = workspaces_1.default;
const team_member_1 = __importDefault(require("./team_member"));
exports.WorkspaceMember = team_member_1.default;
const folder_1 = __importDefault(require("./folder"));
exports.Folder = folder_1.default;
const file_share_1 = __importDefault(require("./file_share"));
exports.FileShare = file_share_1.default;
const ipr_1 = __importDefault(require("./ipr"));
exports.IPR_Document = ipr_1.default;
const plan_1 = __importDefault(require("./plan"));
exports.Plan = plan_1.default;
const payment_1 = __importDefault(require("./payment"));
exports.Payment = payment_1.default;
const complain_1 = __importDefault(require("./complain"));
exports.Complaint = complain_1.default;
const consultation_feedback_1 = __importDefault(require("./consultation_feedback"));
exports.ConsultationFeedback = consultation_feedback_1.default;
const follow_up_offer_1 = __importDefault(require("./follow_up_offer"));
exports.FollowUpOffer = follow_up_offer_1.default;
const notification_1 = __importDefault(require("./notification"));
exports.Notification = notification_1.default;
// ─── User ↔ UserRecord ──────────────────────────────────────────────────────
user_1.default.hasOne(user_records_1.default, { foreignKey: 'user_id', as: 'userRecord' });
user_records_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── User ↔ UserDetails ─────────────────────────────────────────────────────
user_1.default.hasOne(user_details_1.default, { foreignKey: 'user_id', as: 'userDetails' });
user_details_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── User ↔ Lawyer ──────────────────────────────────────────────────────────
user_1.default.hasOne(lawyer_1.default, { foreignKey: 'user_id', as: 'lawyer' });
lawyer_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── Lawyer ↔ Junior ────────────────────────────────────────────────────────
lawyer_1.default.hasMany(junior_1.default, { foreignKey: 'lawyer_id', as: 'assignedJuniors' });
junior_1.default.belongsTo(lawyer_1.default, { foreignKey: 'lawyer_id', as: 'assignedLawyer' });
// ─── User ↔ Junior ──────────────────────────────────────────────────────────
user_1.default.hasMany(junior_1.default, { foreignKey: 'user_id', as: 'juniors' });
junior_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'junior' });
// ─── Lawyer ↔ File (documents) ──────────────────────────────────────────────
lawyer_1.default.belongsTo(files_1.default, {
    foreignKey: 'bar_council_certificate',
    as: 'barCouncilCertificate',
});
lawyer_1.default.belongsTo(files_1.default, {
    foreignKey: 'state_council_certificate',
    as: 'stateCouncilCertificate',
});
lawyer_1.default.belongsTo(files_1.default, {
    foreignKey: 'certificate_for_practice',
    as: 'practiceCertificate',
});
lawyer_1.default.belongsTo(files_1.default, {
    foreignKey: 'legal_undertaking',
    as: 'legalUndertaking',
});
// ─── Company ↔ Lawyer (many-to-many via CompanyLawyer) ──────────────────────
company_1.default.belongsToMany(lawyer_1.default, {
    through: company_lawyer_1.default,
    foreignKey: 'company_id',
    otherKey: 'lawyer_id',
    as: 'lawyers',
});
lawyer_1.default.belongsToMany(company_1.default, {
    through: company_lawyer_1.default,
    foreignKey: 'lawyer_id',
    otherKey: 'company_id',
    as: 'companies',
});
lawyer_1.default.hasMany(company_lawyer_1.default, {
    foreignKey: 'lawyer_id',
    as: 'CompanyLawyers',
});
company_lawyer_1.default.belongsTo(company_1.default, {
    foreignKey: 'company_id',
    as: 'company',
});
company_lawyer_1.default.belongsTo(lawyer_1.default, { foreignKey: 'lawyer_id', as: 'lawyer' });
// ─── User ↔ Task ────────────────────────────────────────────────────────────
user_1.default.hasMany(tasks_1.default, { foreignKey: 'user_id', as: 'tasks' });
tasks_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── State ↔ District ───────────────────────────────────────────────────────
state_data_1.default.hasMany(district_data_1.default, { foreignKey: 'own_state_id', as: 'districts' });
district_data_1.default.belongsTo(state_data_1.default, { foreignKey: 'own_state_id', as: 'state' });
// ─── Slot associations ──────────────────────────────────────────────────────
slot_1.default.belongsTo(user_1.default, { foreignKey: 'fromUser', as: 'from_user' });
slot_1.default.belongsTo(user_1.default, { foreignKey: 'toUser', as: 'to_user' });
slot_1.default.belongsTo(query_1.default, { foreignKey: 'query_id', as: 'query' });
// ─── RylawChat ↔ File ───────────────────────────────────────────────────────
rylaw_chat_1.default.belongsTo(files_1.default, {
    foreignKey: 'file_id',
    as: 'file',
    constraints: false,
});
files_1.default.hasMany(rylaw_chat_1.default, {
    foreignKey: 'file_id',
    as: 'chats',
    constraints: false,
});
// ─── RylawChat ↔ Slot ───────────────────────────────────────────────────────
rylaw_chat_1.default.belongsTo(slot_1.default, {
    foreignKey: 'slot_id',
    as: 'slot',
    constraints: false,
});
slot_1.default.hasMany(rylaw_chat_1.default, {
    foreignKey: 'slot_id',
    as: 'chats',
    constraints: false,
});
// ─── RylawChat ↔ User (sender / receiver) ───────────────────────────────────
rylaw_chat_1.default.belongsTo(user_1.default, {
    foreignKey: 'sender_id',
    as: 'sender',
    constraints: false,
});
rylaw_chat_1.default.belongsTo(user_1.default, {
    foreignKey: 'receiver_id',
    as: 'receiver',
    constraints: false,
});
// ─── UserRecord ↔ CallLog ───────────────────────────────────────────────────
// CallLog model is currently empty – associations will be added once it is defined.
// ─── QueryResponse ↔ Query & Lawyer ─────────────────────────────────────────
query_response_1.default.belongsTo(query_1.default, { foreignKey: 'query_id', as: 'query' });
query_1.default.hasMany(query_response_1.default, { foreignKey: 'query_id', as: 'responses' });
query_response_1.default.belongsTo(lawyer_1.default, { foreignKey: 'lawyer_id', as: 'lawyer' });
lawyer_1.default.hasMany(query_response_1.default, {
    foreignKey: 'lawyer_id',
    as: 'queryResponses',
});
// ─── LegalArea ↔ Query (category) ───────────────────────────────────────────
// Query.category stores the LegalArea ID
query_1.default.belongsTo(legal_area_1.default, { foreignKey: 'category', as: 'legalArea' });
legal_area_1.default.hasMany(query_1.default, { foreignKey: 'category', as: 'queries' });
// ─── User ↔ Query ───────────────────────────────────────────────────────────
query_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
user_1.default.hasMany(query_1.default, { foreignKey: 'user_id', as: 'queries' });
// ─── User ↔ Ticket ──────────────────────────────────────────────────────────
tickets_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
user_1.default.hasMany(tickets_1.default, { foreignKey: 'user_id', as: 'tickets' });
// ─── Ticket ↔ Query ─────────────────────────────────────────────────────────
tickets_1.default.belongsTo(query_1.default, { foreignKey: 'query_id', as: 'query' });
query_1.default.hasMany(tickets_1.default, { foreignKey: 'query_id', as: 'tickets' });
// ─── ConsultationFeedback ↔ User & Lawyer ───────────────────────────────────
consultation_feedback_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
user_1.default.hasMany(consultation_feedback_1.default, { foreignKey: 'user_id', as: 'feedbacks' });
consultation_feedback_1.default.belongsTo(lawyer_1.default, { foreignKey: 'lawyer_id', as: 'lawyer' });
lawyer_1.default.hasMany(consultation_feedback_1.default, { foreignKey: 'lawyer_id', as: 'feedbacks' });
// ─── User ↔ Complaint ───────────────────────────────────────────────────────
complain_1.default.belongsTo(user_1.default, { foreignKey: 'raised_by', as: 'raisedBy' });
user_1.default.hasMany(complain_1.default, { foreignKey: 'raised_by', as: 'raisedComplaints' });
complain_1.default.belongsTo(user_1.default, { foreignKey: 'against_user', as: 'againstUser' });
user_1.default.hasMany(complain_1.default, { foreignKey: 'against_user', as: 'receivedComplaints' });
// ─── CallLog associations ───────────────────────────────────────────────────
call_log_1.default.belongsTo(user_1.default, { foreignKey: 'fromUserId', as: 'fromUser' });
call_log_1.default.belongsTo(user_1.default, { foreignKey: 'toUserId', as: 'toUser' });
call_log_1.default.belongsTo(slot_1.default, { foreignKey: 'slot_id', as: 'slot' });
slot_1.default.hasMany(call_log_1.default, { foreignKey: 'slot_id', as: 'callLogs' });
// ─── FollowUpOffer associations ────────────────────────────────────────
follow_up_offer_1.default.belongsTo(slot_1.default, { foreignKey: 'slot_id', as: 'slot' });
slot_1.default.hasMany(follow_up_offer_1.default, { foreignKey: 'slot_id', as: 'followUpOffers' });
// ─── Contract associations──────────────────────────────────────────────
contract_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
user_1.default.hasMany(contract_1.default, { foreignKey: 'user_id', as: 'contracts' });
// ─── Message associations──────────────────────────────────────────────
message_1.default.belongsTo(user_1.default, { foreignKey: 'sender_id', as: 'sender' });
user_1.default.hasMany(message_1.default, { foreignKey: 'sender_id', as: 'sentMessages' });
message_1.default.belongsTo(user_1.default, { foreignKey: 'receiver_id', as: 'receiver' });
user_1.default.hasMany(message_1.default, { foreignKey: 'receiver_id', as: 'receivedMessages' });
message_1.default.belongsTo(files_1.default, { foreignKey: 'file_id', as: 'file' });
files_1.default.hasMany(message_1.default, { foreignKey: 'file_id' });
message_1.default.belongsTo(slot_1.default, { foreignKey: 'slot_id', as: 'slot' });
slot_1.default.hasMany(message_1.default, { foreignKey: 'slot_id' });
// ─── User ↔ File ─────────────────────────────────────────
user_1.default.hasMany(files_1.default, { foreignKey: 'owner_id', as: 'files' });
files_1.default.belongsTo(user_1.default, { foreignKey: 'owner_id', as: 'owner' });
message_1.default.belongsTo(query_1.default, { foreignKey: 'query_id' });
query_1.default.hasMany(message_1.default, { foreignKey: 'query_id' });
// Message ↔ MessageDelete
message_1.default.hasMany(message_process_1.MessageDelete, {
    foreignKey: 'message_id',
    as: 'deletedBy',
});
message_process_1.MessageDelete.belongsTo(message_1.default, {
    foreignKey: 'message_id',
});
// Message ↔ MessageReply
message_1.default.hasMany(message_process_1.MessageReply, {
    foreignKey: 'parent_message_id',
    as: 'replies',
});
message_process_1.MessageReply.belongsTo(message_1.default, {
    foreignKey: 'reply_message_id',
    as: 'replyMessage',
});
// Message ↔ MessageStatus
message_1.default.hasMany(message_process_1.MessageStatus, {
    foreignKey: 'message_id',
    as: 'statuses',
});
message_process_1.MessageStatus.belongsTo(message_1.default, {
    foreignKey: 'message_id',
});
// ─── User ↔ Plan ────────────────────────────────────────────────────────────
user_1.default.belongsTo(plan_1.default, { foreignKey: 'plan_id', as: 'currentPlan' });
plan_1.default.hasMany(user_1.default, { foreignKey: 'plan_id', as: 'users' });
// ─── User ↔ Payment ─────────────────────────────────────────────────────────
user_1.default.hasMany(payment_1.default, { foreignKey: 'user_id', as: 'payments' });
payment_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── Plan ↔ Payment ─────────────────────────────────────────────────────────
plan_1.default.hasMany(payment_1.default, { foreignKey: 'plan_id', as: 'payments' });
payment_1.default.belongsTo(plan_1.default, { foreignKey: 'plan_id', as: 'plan' });
// ─── ChatGroup ↔ GroupMember ─────────────────────────────────────────────
chat_group_1.default.hasMany(group_member_1.default, {
    foreignKey: 'group_id',
    as: 'members',
});
group_member_1.default.belongsTo(chat_group_1.default, {
    foreignKey: 'group_id',
    as: 'chat_group',
});
// ─── User ↔ GroupMember ──────────────────────────────────────────────────
user_1.default.hasMany(group_member_1.default, { foreignKey: 'user_id', as: 'groupMemberships' });
group_member_1.default.belongsTo(user_1.default, { foreignKey: 'user_id', as: 'user' });
// ─── User ↔ Workspace ─────────────────────────────────────
user_1.default.hasMany(workspaces_1.default, {
    foreignKey: 'owner_id',
    as: 'workspaces',
});
workspaces_1.default.belongsTo(user_1.default, {
    foreignKey: 'owner_id',
    as: 'owner',
});
// ─── Workspace ↔ Folder ───────────────────────────────────
workspaces_1.default.hasMany(folder_1.default, {
    foreignKey: 'workspace_id',
    as: 'folders',
});
folder_1.default.belongsTo(workspaces_1.default, {
    foreignKey: 'workspace_id',
    as: 'workspace',
});
// ─── Folder ↔ Folder (Nested) ─────────────────────────────
folder_1.default.hasMany(folder_1.default, {
    foreignKey: 'parent_folder_id',
    as: 'subFolders',
});
folder_1.default.belongsTo(folder_1.default, {
    foreignKey: 'parent_folder_id',
    as: 'parentFolder',
});
// ─── User ↔ Folder ────────────────────────────────────────
user_1.default.hasMany(folder_1.default, {
    foreignKey: 'created_by',
    as: 'createdFolders',
});
folder_1.default.belongsTo(user_1.default, {
    foreignKey: 'created_by',
    as: 'creator',
});
// ─── Folder ↔ File ────────────────────────────────────────
folder_1.default.hasMany(files_1.default, {
    foreignKey: 'folder_id',
    as: 'files',
});
files_1.default.belongsTo(folder_1.default, {
    foreignKey: 'folder_id',
    as: 'folder',
});
// ─── Workspace ↔ File (Root level files) ──────────────────
workspaces_1.default.hasMany(files_1.default, {
    foreignKey: 'workspace_id',
    as: 'files',
});
files_1.default.belongsTo(workspaces_1.default, {
    foreignKey: 'workspace_id',
    as: 'workspace',
});
// ─── File ↔ FileShare ─────────────────────────────────────
files_1.default.hasMany(file_share_1.default, {
    foreignKey: 'file_id',
    as: 'shares',
});
file_share_1.default.belongsTo(files_1.default, {
    foreignKey: 'file_id',
    as: 'file',
});
// ─── User ↔ FileShare ────────────────────────────────────
user_1.default.hasMany(file_share_1.default, { foreignKey: 'shared_by', as: 'sharesCreated' });
file_share_1.default.belongsTo(user_1.default, { foreignKey: 'shared_by', as: 'sharer' });
user_1.default.hasMany(file_share_1.default, { foreignKey: 'shared_with', as: 'sharesReceived' });
file_share_1.default.belongsTo(user_1.default, { foreignKey: 'shared_with', as: 'sharedWith' });
// ─── Workspace ↔ WorkspaceMember ──────────────────────────
workspaces_1.default.hasMany(team_member_1.default, {
    foreignKey: 'workspace_id',
    as: 'members',
});
team_member_1.default.belongsTo(workspaces_1.default, {
    foreignKey: 'workspace_id',
    as: 'workspace',
});
// ─── User ↔ WorkspaceMember ──────────────────────────────
user_1.default.hasMany(team_member_1.default, {
    foreignKey: 'user_id',
    as: 'workspaceMemberships',
});
team_member_1.default.belongsTo(user_1.default, {
    foreignKey: 'user_id',
    as: 'user',
});
//# sourceMappingURL=index.js.map