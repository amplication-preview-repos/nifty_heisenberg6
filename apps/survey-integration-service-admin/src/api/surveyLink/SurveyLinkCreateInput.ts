import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { SurveyResponseCreateNestedManyWithoutSurveyLinksInput } from "./SurveyResponseCreateNestedManyWithoutSurveyLinksInput";

export type SurveyLinkCreateInput = {
  channel?: ChannelWhereUniqueInput | null;
  referenceId?: string | null;
  surveyResponses?: SurveyResponseCreateNestedManyWithoutSurveyLinksInput;
  uniqueLink?: string | null;
};
