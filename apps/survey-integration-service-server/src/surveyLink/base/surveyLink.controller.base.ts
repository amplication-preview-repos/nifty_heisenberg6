/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SurveyLinkService } from "../surveyLink.service";
import { SurveyLinkCreateInput } from "./SurveyLinkCreateInput";
import { SurveyLink } from "./SurveyLink";
import { SurveyLinkFindManyArgs } from "./SurveyLinkFindManyArgs";
import { SurveyLinkWhereUniqueInput } from "./SurveyLinkWhereUniqueInput";
import { SurveyLinkUpdateInput } from "./SurveyLinkUpdateInput";
import { SurveyResponseFindManyArgs } from "../../surveyResponse/base/SurveyResponseFindManyArgs";
import { SurveyResponse } from "../../surveyResponse/base/SurveyResponse";
import { SurveyResponseWhereUniqueInput } from "../../surveyResponse/base/SurveyResponseWhereUniqueInput";

export class SurveyLinkControllerBase {
  constructor(protected readonly service: SurveyLinkService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SurveyLink })
  async createSurveyLink(
    @common.Body() data: SurveyLinkCreateInput
  ): Promise<SurveyLink> {
    return await this.service.createSurveyLink({
      data: {
        ...data,

        channel: data.channel
          ? {
              connect: data.channel,
            }
          : undefined,
      },
      select: {
        channel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        referenceId: true,
        uniqueLink: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SurveyLink] })
  @ApiNestedQuery(SurveyLinkFindManyArgs)
  async surveyLinks(@common.Req() request: Request): Promise<SurveyLink[]> {
    const args = plainToClass(SurveyLinkFindManyArgs, request.query);
    return this.service.surveyLinks({
      ...args,
      select: {
        channel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        referenceId: true,
        uniqueLink: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SurveyLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async surveyLink(
    @common.Param() params: SurveyLinkWhereUniqueInput
  ): Promise<SurveyLink | null> {
    const result = await this.service.surveyLink({
      where: params,
      select: {
        channel: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        referenceId: true,
        uniqueLink: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SurveyLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSurveyLink(
    @common.Param() params: SurveyLinkWhereUniqueInput,
    @common.Body() data: SurveyLinkUpdateInput
  ): Promise<SurveyLink | null> {
    try {
      return await this.service.updateSurveyLink({
        where: params,
        data: {
          ...data,

          channel: data.channel
            ? {
                connect: data.channel,
              }
            : undefined,
        },
        select: {
          channel: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          referenceId: true,
          uniqueLink: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SurveyLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSurveyLink(
    @common.Param() params: SurveyLinkWhereUniqueInput
  ): Promise<SurveyLink | null> {
    try {
      return await this.service.deleteSurveyLink({
        where: params,
        select: {
          channel: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          referenceId: true,
          uniqueLink: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/surveyResponses")
  @ApiNestedQuery(SurveyResponseFindManyArgs)
  async findSurveyResponses(
    @common.Req() request: Request,
    @common.Param() params: SurveyLinkWhereUniqueInput
  ): Promise<SurveyResponse[]> {
    const query = plainToClass(SurveyResponseFindManyArgs, request.query);
    const results = await this.service.findSurveyResponses(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        rating: true,
        responseData: true,

        surveyLink: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/surveyResponses")
  async connectSurveyResponses(
    @common.Param() params: SurveyLinkWhereUniqueInput,
    @common.Body() body: SurveyResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveyResponses: {
        connect: body,
      },
    };
    await this.service.updateSurveyLink({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/surveyResponses")
  async updateSurveyResponses(
    @common.Param() params: SurveyLinkWhereUniqueInput,
    @common.Body() body: SurveyResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveyResponses: {
        set: body,
      },
    };
    await this.service.updateSurveyLink({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/surveyResponses")
  async disconnectSurveyResponses(
    @common.Param() params: SurveyLinkWhereUniqueInput,
    @common.Body() body: SurveyResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      surveyResponses: {
        disconnect: body,
      },
    };
    await this.service.updateSurveyLink({
      where: params,
      data,
      select: { id: true },
    });
  }
}
