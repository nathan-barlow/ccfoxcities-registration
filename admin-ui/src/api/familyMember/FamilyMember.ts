import { User } from "../user/User";

export type FamilyMember = {
  age?: "age_0_3" | "age_4_7" | "age_8_11" | "age_12_17" | "age_adult";
  createdAt: Date;
  familyId?: User | null;
  id: string;
  updatedAt: Date;
  wishlist: string | null;
};
