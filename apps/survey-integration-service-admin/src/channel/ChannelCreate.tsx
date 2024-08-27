import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SurveyLinkTitle } from "../surveyLink/SurveyLinkTitle";

export const ChannelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
