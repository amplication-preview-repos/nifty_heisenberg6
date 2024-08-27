import { InputJsonValue } from "../../types";
import { SurveyLinkWhereUniqueInput } from "../surveyLink/SurveyLinkWhereUniqueInput";

export type SurveyResponseCreateInput = {
  rating?: number | null;
  responseData?: InputJsonValue;
  surveyLink?: SurveyLinkWhereUniqueInput | null;
};
