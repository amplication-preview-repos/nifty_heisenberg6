import * as graphql from "@nestjs/graphql";
import { SurveyLinkResolverBase } from "./base/surveyLink.resolver.base";
import { SurveyLink } from "./base/SurveyLink";
import { SurveyLinkService } from "./surveyLink.service";

@graphql.Resolver(() => SurveyLink)
export class SurveyLinkResolver extends SurveyLinkResolverBase {
  constructor(protected readonly service: SurveyLinkService) {
    super(service);
  }
}
