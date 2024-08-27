import { Module } from "@nestjs/common";
import { SurveyLinkModuleBase } from "./base/surveyLink.module.base";
import { SurveyLinkService } from "./surveyLink.service";
import { SurveyLinkController } from "./surveyLink.controller";
import { SurveyLinkResolver } from "./surveyLink.resolver";

@Module({
  imports: [SurveyLinkModuleBase],
  controllers: [SurveyLinkController],
  providers: [SurveyLinkService, SurveyLinkResolver],
  exports: [SurveyLinkService],
})
export class SurveyLinkModule {}
