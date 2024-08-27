import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SurveyLinkWhereUniqueInput } from "../surveyLink/SurveyLinkWhereUniqueInput";

export type SurveyResponseWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  responseData?: JsonFilter;
  surveyLink?: SurveyLinkWhereUniqueInput;
};
