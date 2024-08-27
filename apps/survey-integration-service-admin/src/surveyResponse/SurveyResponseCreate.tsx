import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SurveyLinkTitle } from "../surveyLink/SurveyLinkTitle";

export const SurveyResponseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="rating" source="rating" />
        <div />
        <ReferenceInput
          source="surveyLink.id"
          reference="SurveyLink"
          label="surveyLink"
        >
          <SelectInput optionText={SurveyLinkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
