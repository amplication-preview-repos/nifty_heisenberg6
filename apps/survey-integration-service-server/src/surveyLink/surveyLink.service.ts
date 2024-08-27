import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SurveyLinkServiceBase } from "./base/surveyLink.service.base";

@Injectable()
export class SurveyLinkService extends SurveyLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
