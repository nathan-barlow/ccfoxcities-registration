import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FamilyMemberWhereInput = {
  age?: "age_0_3" | "age_4_7" | "age_8_11" | "age_12_17" | "age_adult";
  familyId?: UserWhereUniqueInput;
  id?: StringFilter;
  wishlist?: StringNullableFilter;
};
