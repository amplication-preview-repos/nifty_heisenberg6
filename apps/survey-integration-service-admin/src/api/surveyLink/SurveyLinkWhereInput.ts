import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SurveyResponseListRelationFilter } from "../surveyResponse/SurveyResponseListRelationFilter";

export type SurveyLinkWhereInput = {
  channel?: ChannelWhereUniqueInput;
  id?: StringFilter;
  referenceId?: StringNullableFilter;
  surveyResponses?: SurveyResponseListRelationFilter;
  uniqueLink?: StringNullableFilter;
};
