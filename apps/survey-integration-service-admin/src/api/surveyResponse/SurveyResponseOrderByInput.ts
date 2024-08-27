import { SortOrder } from "../../util/SortOrder";

export type SurveyResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  responseData?: SortOrder;
  surveyLinkId?: SortOrder;
  updatedAt?: SortOrder;
};
