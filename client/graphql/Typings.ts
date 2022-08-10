export interface IUserForm {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  gender?: string | undefined;
  ipAddress?: string | undefined;
}

export interface IUser extends IUserForm {
  id: number;
}
