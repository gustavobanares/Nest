import { Module } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { CreateAccountController } from "./controllers/create-account.controller";
import { AuthenticateController } from "./controllers/authenticate.controller";
import { DatabaseModule } from '../database/prisma/database.module';
import { CreateQuestionUseCase } from "@/domain/forum/application/use-cases/create-question";

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase],
})
export class HttpModule {}
