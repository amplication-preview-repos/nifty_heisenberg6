import { InputJsonValue } from "../../types";
import { SurveyLinkWhereUniqueInput } from "../surveyLink/SurveyLinkWhereUniqueInput";

export type SurveyResponseUpdateInput = {
  rating?: number | null;
  responseData?: InputJsonValue;
  surveyLink?: SurveyLinkWhereUniqueInput | null;
};
