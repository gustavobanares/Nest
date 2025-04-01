import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { z } from "zod";
import { EnvService } from "../env/env.service";

const tokenPayLoadSchema = z.object({
  sub: z.string().uuid(),
});

export type UserPayLoad = z.infer<typeof tokenPayLoadSchema>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: EnvService) {
    const publicKey = config.get("JWT_PUBLIC_KEY");

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, "base64"),
      algorithms: ["RS256"],
    });
  }

  async validate(payload: UserPayLoad) {
    return tokenPayLoadSchema.parse(payload);
  }
}
