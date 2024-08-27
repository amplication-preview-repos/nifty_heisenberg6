import { SurveyLink } from "../surveyLink/SurveyLink";

export type Channel = {
  createdAt: Date;
  id: string;
  name: string | null;
  surveyLinks?: Array<SurveyLink>;
  uniqueId: string | null;
  updatedAt: Date;
};
