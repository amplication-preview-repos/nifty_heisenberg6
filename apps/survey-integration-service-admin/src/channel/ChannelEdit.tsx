import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SurveyLinkTitle } from "../surveyLink/SurveyLinkTitle";

export const ChannelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="surveyLinks"
          reference="SurveyLink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyLinkTitle} />
        </ReferenceArrayInput>
        <TextInput label="uniqueId" source="uniqueId" />
      </SimpleForm>
    </Edit>
  );
};
