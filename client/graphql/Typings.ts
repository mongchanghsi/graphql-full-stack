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

export interface IToken {
  aEmissionPerSecond: string;
  liquidityRate: string;
  name: string;
  sEmissionPerSecond: string;
  stableBorrowRate: string;
  totalATokenSupply: string;
  totalCurrentVariableDebt: string;
  underlyingAsset: string;
  vEmissionPerSecond: string;
  variableBorrowRate: string;
  __typename: string;
}

export interface ITokenAPY extends IToken {
  apy: number;
}
