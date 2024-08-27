import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyLinkService } from "./surveyLink.service";
import { SurveyLinkControllerBase } from "./base/surveyLink.controller.base";

@swagger.ApiTags("surveyLinks")
@common.Controller("surveyLinks")
export class SurveyLinkController extends SurveyLinkControllerBase {
  constructor(protected readonly service: SurveyLinkService) {
    super(service);
  }
}
