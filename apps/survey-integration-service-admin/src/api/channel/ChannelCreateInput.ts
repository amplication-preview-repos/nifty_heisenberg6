import { SurveyLinkCreateNestedManyWithoutChannelsInput } from "./SurveyLinkCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  name?: string | null;
  surveyLinks?: SurveyLinkCreateNestedManyWithoutChannelsInput;
  uniqueId?: string | null;
};
