import { SurveyLinkUpdateManyWithoutChannelsInput } from "./SurveyLinkUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  name?: string | null;
  surveyLinks?: SurveyLinkUpdateManyWithoutChannelsInput;
  uniqueId?: string | null;
};
