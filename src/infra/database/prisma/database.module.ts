import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { PrismaQuestionsRepository } from "./repositories/prisma-questions-repository";
import { PrismaQuestionAttachmentsRepository } from "./repositories/prisma-question-attachments-repository";
import { PrismaQuestionCommentsRepository } from "./repositories/prisma-question-comments-repository";
import { PrismaService } from "./prisma.service";
import { Module } from "@nestjs/common";
import { PrismaAnswersRepository } from "./repositories/prisma-answers-repository";
import { PrismaAnswerCommentsRepository } from "./repositories/prisma-answer-comments-repository";
import { PrismaAnswerAttachmentsRepository } from "./repositories/prisma-answer-attachments-repository";
import { StudentsRepository } from "@/domain/forum/application/repositories/students-repository";
import { PrismaStudentsRepository } from "./repositories/prisma-students-repository";

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository, // Adicionado
    PrismaAnswerAttachmentsRepository, // Adicionado
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    StudentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
