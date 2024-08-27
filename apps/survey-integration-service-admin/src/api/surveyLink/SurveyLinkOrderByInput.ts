import { SortOrder } from "../../util/SortOrder";

export type SurveyLinkOrderByInput = {
  channelId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  referenceId?: SortOrder;
  uniqueLink?: SortOrder;
  updatedAt?: SortOrder;
};
