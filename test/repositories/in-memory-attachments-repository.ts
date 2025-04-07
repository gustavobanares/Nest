import { Attachment } from "@/domain/forum/enterprise/entities/attachment";
import { DomainEvents } from "@/core/events/domain-events";
import { AttachmentsRepository } from "@/domain/forum/application/repositories/attachments-repository";

export class InMemoryAttachmentsRepository implements AttachmentsRepository {
  public items: Attachment[] = [];

  async create(attachment: Attachment): Promise<void> {
    this.items.push(attachment);
  }
}
