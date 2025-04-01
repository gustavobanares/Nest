import { UseCaseError } from "@/core/entities/errors/use-case-error";

export class WrongCredentialsError extends Error implements UseCaseError {
  constructor() {
    super(`Credentials are not valid`);
  }
}
