import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { CreateAccountController } from "./controllers/create-account.controller";
import { AuthenticateController } from "./controllers/authenticate.controller";

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
