import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHANNEL_TITLE_FIELD } from "./ChannelTitle";

export const ChannelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="uniqueId" source="uniqueId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SurveyLink"
          target="channelId"
          label="SurveyLinks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="channel"
              source="channel.id"
              reference="Channel"
            >
              <TextField source={CHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="referenceId" source="referenceId" />
            <TextField label="uniqueLink" source="uniqueLink" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
