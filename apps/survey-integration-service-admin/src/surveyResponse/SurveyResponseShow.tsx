import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SURVEYLINK_TITLE_FIELD } from "../surveyLink/SurveyLinkTitle";

export const SurveyResponseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="responseData" source="responseData" />
        <ReferenceField
          label="surveyLink"
          source="surveylink.id"
          reference="SurveyLink"
        >
          <TextField source={SURVEYLINK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
