import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChannelTitle } from "../channel/ChannelTitle";
import { SurveyResponseTitle } from "../surveyResponse/SurveyResponseTitle";

export const SurveyLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="channel.id" reference="Channel" label="channel">
          <SelectInput optionText={ChannelTitle} />
        </ReferenceInput>
        <TextInput label="referenceId" source="referenceId" />
        <ReferenceArrayInput
          source="surveyResponses"
          reference="SurveyResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyResponseTitle} />
        </ReferenceArrayInput>
        <TextInput label="uniqueLink" source="uniqueLink" />
      </SimpleForm>
    </Create>
  );
};
