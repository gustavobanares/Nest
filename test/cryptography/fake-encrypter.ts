import { Encrypter } from "@/domain/forum/application/cryptography/encrypter";

export class FakEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload);
  }
}
