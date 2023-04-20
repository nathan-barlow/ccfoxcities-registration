import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FamilyMemberUpdateInput = {
  age?: "age_0_3" | "age_4_7" | "age_8_11" | "age_12_17" | "age_adult";
  familyId?: UserWhereUniqueInput | null;
  wishlist?: string | null;
};
