import { PaginationParams } from "@/core/repositories/pagination-params";
import { Question } from "../../enterprise/entities/question";
import { QuestionDetails } from "../../enterprise/entities/value-objects/question-details";

export abstract class QuestionsRepository {
  abstract findById(id: string): Promise<Question | null>;
  abstract findBySlug(slug: string): Promise<Question | null>;
  abstract findManyRecent(params: PaginationParams): Promise<Question[]>;
  abstract findDetailsBySlug(slug: string): Promise<QuestionDetails | null>
  abstract save(question: Question): Promise<void>;
  abstract create(question: Question): Promise<void>;
  abstract delete(question: Question): Promise<void>;
}
