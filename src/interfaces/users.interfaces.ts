type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  active: boolean;
};

type TUserReq = Omit<TUser, "id">;
export { TUser, TUserReq };
