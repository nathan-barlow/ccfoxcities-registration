import { StringFilter } from "../../util/StringFilter";
import { FamilyMemberListRelationFilter } from "../familyMember/FamilyMemberListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  familyMembers?: FamilyMemberListRelationFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  phone?: StringFilter;
  username?: StringFilter;
};
