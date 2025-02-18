export interface AuthData {
  email: string;
  password: string;
}

export interface SignupData extends AuthData {
  name?: string;
}
