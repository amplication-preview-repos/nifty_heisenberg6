import { JsonValue } from "type-fest";
import { SurveyLink } from "../surveyLink/SurveyLink";

export type SurveyResponse = {
  createdAt: Date;
  id: string;
  rating: number | null;
  responseData: JsonValue;
  surveyLink?: SurveyLink | null;
  updatedAt: Date;
};
