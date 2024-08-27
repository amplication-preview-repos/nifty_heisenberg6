import { SurveyLinkWhereInput } from "./SurveyLinkWhereInput";
import { SurveyLinkOrderByInput } from "./SurveyLinkOrderByInput";

export type SurveyLinkFindManyArgs = {
  where?: SurveyLinkWhereInput;
  orderBy?: Array<SurveyLinkOrderByInput>;
  skip?: number;
  take?: number;
};
