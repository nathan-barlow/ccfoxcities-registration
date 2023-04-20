import { FamilyMember } from "../familyMember/FamilyMember";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  familyMembers?: Array<FamilyMember>;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
