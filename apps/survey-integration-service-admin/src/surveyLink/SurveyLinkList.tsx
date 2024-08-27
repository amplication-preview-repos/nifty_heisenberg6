import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHANNEL_TITLE_FIELD } from "../channel/ChannelTitle";

export const SurveyLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SurveyLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="channel" source="channel.id" reference="Channel">
          <TextField source={CHANNEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="referenceId" source="referenceId" />
        <TextField label="uniqueLink" source="uniqueLink" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
