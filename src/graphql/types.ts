/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Comment
// ====================================================

export interface Comment_comment {
  __typename: "Comment";
  id: any;
}

export interface Comment {
  comment: Comment_comment;
}

export interface CommentVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Comments
// ====================================================

export interface Comments_comments_author {
  __typename: "User";
  id: any;
  fullName: string;
}

export interface Comments_comments {
  __typename: "Comment";
  id: any;
  author: Comments_comments_author;
  text: string;
  title: string | null;
}

export interface Comments {
  comments: Comments_comments[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateComment
// ====================================================

export interface CreateComment_createComment {
  __typename: "Comment";
  id: any;
}

export interface CreateComment {
  createComment: CreateComment_createComment;
}

export interface CreateCommentVariables {
  input: CommentCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateFile
// ====================================================

export interface CreateFile_createFile {
  __typename: "File";
  id: any;
}

export interface CreateFile {
  createFile: CreateFile_createFile;
}

export interface CreateFileVariables {
  input: FileCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  __typename: "User";
  id: any;
}

export interface CreateUser {
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  input: UserCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateVote
// ====================================================

export interface CreateVote_createVote {
  __typename: "Vote";
  id: any;
}

export interface CreateVote {
  createVote: CreateVote_createVote;
}

export interface CreateVoteVariables {
  input: VoteCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteComments
// ====================================================

export interface DeleteComments {
  deleteComments: boolean;
}

export interface DeleteCommentsVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteFiles
// ====================================================

export interface DeleteFiles {
  deleteFiles: boolean;
}

export interface DeleteFilesVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUsers
// ====================================================

export interface DeleteUsers {
  deleteUsers: boolean;
}

export interface DeleteUsersVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteVotes
// ====================================================

export interface DeleteVotes {
  deleteVotes: boolean;
}

export interface DeleteVotesVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EmailLogin
// ====================================================

export interface EmailLogin_emailLogin {
  __typename: "LoginResponse";
  token: string;
}

export interface EmailLogin {
  emailLogin: EmailLogin_emailLogin;
}

export interface EmailLoginVariables {
  password: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EmailRegister
// ====================================================

export interface EmailRegister_emailRegister {
  __typename: "LoginResponse";
  token: string;
}

export interface EmailRegister {
  emailRegister: EmailRegister_emailRegister;
}

export interface EmailRegisterVariables {
  input: UserCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: File
// ====================================================

export interface File_file {
  __typename: "File";
  id: any;
}

export interface File {
  file: File_file;
}

export interface FileVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Files
// ====================================================

export interface Files_files {
  __typename: "File";
  id: any;
}

export interface Files {
  files: Files_files[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Logout
// ====================================================

export interface Logout {
  logout: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchComments
// ====================================================

export interface SearchComments_searchComments_items {
  __typename: "Comment";
  id: any;
}

export interface SearchComments_searchComments {
  __typename: "PaginatedCommentResponse";
  items: SearchComments_searchComments_items[];
}

export interface SearchComments {
  searchComments: SearchComments_searchComments;
}

export interface SearchCommentsVariables {
  order?: CommentSearchOrderInput[] | null;
  take?: number | null;
  skip?: number | null;
  search?: CommentSearchInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchFiles
// ====================================================

export interface SearchFiles_searchFiles_items {
  __typename: "File";
  id: any;
}

export interface SearchFiles_searchFiles {
  __typename: "PaginatedFileResponse";
  items: SearchFiles_searchFiles_items[];
}

export interface SearchFiles {
  searchFiles: SearchFiles_searchFiles;
}

export interface SearchFilesVariables {
  order?: FileSearchOrderInput[] | null;
  take?: number | null;
  skip?: number | null;
  search?: FileSearchInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchUsers
// ====================================================

export interface SearchUsers_searchUsers_items {
  __typename: "User";
  id: any;
}

export interface SearchUsers_searchUsers {
  __typename: "PaginatedUserResponse";
  items: SearchUsers_searchUsers_items[];
}

export interface SearchUsers {
  searchUsers: SearchUsers_searchUsers;
}

export interface SearchUsersVariables {
  order?: UserSearchOrderInput[] | null;
  take?: number | null;
  skip?: number | null;
  search?: UserSearchInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchVotes
// ====================================================

export interface SearchVotes_searchVotes_items {
  __typename: "Vote";
  id: any;
}

export interface SearchVotes_searchVotes {
  __typename: "PaginatedVoteResponse";
  items: SearchVotes_searchVotes_items[];
}

export interface SearchVotes {
  searchVotes: SearchVotes_searchVotes;
}

export interface SearchVotesVariables {
  order?: VoteSearchOrderInput[] | null;
  take?: number | null;
  skip?: number | null;
  search?: VoteSearchInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateComment
// ====================================================

export interface UpdateComment_updateComment {
  __typename: "Comment";
  id: any;
}

export interface UpdateComment {
  updateComment: UpdateComment_updateComment;
}

export interface UpdateCommentVariables {
  input: CommentEditInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateFile
// ====================================================

export interface UpdateFile_updateFile {
  __typename: "File";
  id: any;
}

export interface UpdateFile {
  updateFile: UpdateFile_updateFile;
}

export interface UpdateFileVariables {
  input: FileEditInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser {
  __typename: "User";
  id: any;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  input: UserEditInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateVote
// ====================================================

export interface UpdateVote_updateVote {
  __typename: "Vote";
  id: any;
}

export interface UpdateVote {
  updateVote: UpdateVote_updateVote;
}

export interface UpdateVoteVariables {
  input: VoteEditInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user {
  __typename: "User";
  id: any;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users {
  __typename: "User";
  id: any;
}

export interface Users {
  users: Users_users[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Vote
// ====================================================

export interface Vote_vote {
  __typename: "Vote";
  id: any;
}

export interface Vote {
  vote: Vote_vote;
}

export interface VoteVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Votes
// ====================================================

export interface Votes_votes {
  __typename: "Vote";
  id: any;
}

export interface Votes {
  votes: Votes_votes[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export interface CommentCreateInput {
  text: string;
  title?: string | null;
  parentComment?: CommentNestedInput | null;
}

export interface CommentEditInput {
  id: any;
  text?: string | null;
  title?: string | null;
  parentComment?: CommentNestedInput | null;
}

export interface CommentNestedInput {
  id?: any | null;
  text?: string | null;
  title?: string | null;
  parentComment?: CommentNestedInput | null;
}

export interface CommentSearchInput {
  id?: any | null;
  text?: string | null;
  title?: string | null;
  author?: ReferenceSearchInput | null;
  parentComment?: ReferenceSearchInput | null;
}

export interface CommentSearchOrderInput {
  id?: OrderEnum | null;
  text?: OrderEnum | null;
  title?: OrderEnum | null;
  author?: OrderEnum | null;
  parentComment?: OrderEnum | null;
}

export interface FileCreateInput {
  contentBase64: string;
}

export interface FileEditInput {
  id: any;
  contentBase64?: string | null;
}

export interface FileSearchInput {
  id?: any | null;
  contentBase64?: string | null;
}

export interface FileSearchOrderInput {
  id?: OrderEnum | null;
  contentBase64?: OrderEnum | null;
}

export interface ReferenceSearchInput {
  id?: any | null;
}

export interface UserCreateInput {
  email?: string | null;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserEditInput {
  id: any;
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface UserSearchInput {
  id?: any | null;
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface UserSearchOrderInput {
  id?: OrderEnum | null;
  email?: OrderEnum | null;
  password?: OrderEnum | null;
  firstName?: OrderEnum | null;
  lastName?: OrderEnum | null;
}

export interface VoteCreateInput {
  amount: number;
  comment: CommentNestedInput;
}

export interface VoteEditInput {
  id: any;
  amount?: number | null;
  comment?: CommentNestedInput | null;
}

export interface VoteSearchInput {
  id?: any | null;
  amount?: number | null;
  comment?: ReferenceSearchInput | null;
  author?: ReferenceSearchInput | null;
}

export interface VoteSearchOrderInput {
  id?: OrderEnum | null;
  amount?: OrderEnum | null;
  comment?: OrderEnum | null;
  author?: OrderEnum | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
