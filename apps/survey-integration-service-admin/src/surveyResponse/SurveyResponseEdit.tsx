import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SurveyLinkTitle } from "../surveyLink/SurveyLinkTitle";

export const SurveyResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
