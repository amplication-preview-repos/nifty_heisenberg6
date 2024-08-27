import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SURVEYLINK_TITLE_FIELD } from "./SurveyLinkTitle";
import { CHANNEL_TITLE_FIELD } from "../channel/ChannelTitle";

export const SurveyLinkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="channel" source="channel.id" reference="Channel">
          <TextField source={CHANNEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="referenceId" source="referenceId" />
        <TextField label="uniqueLink" source="uniqueLink" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SurveyResponse"
          target="surveyLinkId"
          label="SurveyResponses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
