import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { SurveyResponseUpdateManyWithoutSurveyLinksInput } from "./SurveyResponseUpdateManyWithoutSurveyLinksInput";

export type SurveyLinkUpdateInput = {
  channel?: ChannelWhereUniqueInput | null;
  referenceId?: string | null;
  surveyResponses?: SurveyResponseUpdateManyWithoutSurveyLinksInput;
  uniqueLink?: string | null;
};
