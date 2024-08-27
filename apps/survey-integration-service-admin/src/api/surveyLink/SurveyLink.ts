import { Channel } from "../channel/Channel";
import { SurveyResponse } from "../surveyResponse/SurveyResponse";

export type SurveyLink = {
  channel?: Channel | null;
  createdAt: Date;
  id: string;
  referenceId: string | null;
  surveyResponses?: Array<SurveyResponse>;
  uniqueLink: string | null;
  updatedAt: Date;
};
