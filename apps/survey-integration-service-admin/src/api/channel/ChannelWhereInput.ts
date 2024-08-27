import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SurveyLinkListRelationFilter } from "../surveyLink/SurveyLinkListRelationFilter";

export type ChannelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  surveyLinks?: SurveyLinkListRelationFilter;
  uniqueId?: StringNullableFilter;
};
