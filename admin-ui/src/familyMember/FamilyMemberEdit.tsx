import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const FamilyMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="age"
          label="Age"
          choices={[
            { label: "age 0-3", value: "age_0_3" },
            { label: "age 4-7", value: "age_4_7" },
            { label: "age 8-11", value: "age_8_11" },
            { label: "age 12-17", value: "age_12_17" },
            { label: "adult", value: "age_adult" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="familyId.id" reference="User" label="FamilyID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Wishlist" multiline source="wishlist" />
      </SimpleForm>
    </Edit>
  );
};
