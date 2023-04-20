import { FamilyMemberUpdateManyWithoutUsersInput } from "./FamilyMemberUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  familyMembers?: FamilyMemberUpdateManyWithoutUsersInput;
  firstName?: string;
  lastName?: string;
  password?: string;
  phone?: string;
  roles?: InputJsonValue;
  username?: string;
};
