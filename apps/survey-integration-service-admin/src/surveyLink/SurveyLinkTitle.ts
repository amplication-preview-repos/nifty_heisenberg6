import { SurveyLink as TSurveyLink } from "../api/surveyLink/SurveyLink";

export const SURVEYLINK_TITLE_FIELD = "referenceId";

export const SurveyLinkTitle = (record: TSurveyLink): string => {
  return record.referenceId?.toString() || String(record.id);
};
