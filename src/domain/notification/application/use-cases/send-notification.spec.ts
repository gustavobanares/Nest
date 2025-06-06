import { describe, expect, it, beforeEach } from "vitest";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { SendNotificationUseCase } from "./send-notification";
import { InMemoryNotificationsRepository } from "test/repositories/in-memory-notifications-repository";

let inMemoryNotificationsRepository: InMemoryNotificationsRepository;
let sut: SendNotificationUseCase;

describe("Send notification", () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository();
    sut = new SendNotificationUseCase(inMemoryNotificationsRepository);
  });

  it("should be able to send a notification", async () => {
    const result = await sut.execute({
      recipientId: "1",
      title: "Nova notificação",
      content: "Conteúdo da nova notificação",
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryNotificationsRepository.items[0]).toEqual(
      result.value?.notification
    );
  });
});
