import { FamilyMemberCreateNestedManyWithoutUsersInput } from "./FamilyMemberCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  familyMembers?: FamilyMemberCreateNestedManyWithoutUsersInput;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  roles: InputJsonValue;
  username: string;
};
