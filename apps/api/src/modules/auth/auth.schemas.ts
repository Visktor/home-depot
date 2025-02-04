import { Dto } from '#/utils/types';
import { z } from 'zod';

const AuthSchemas = {
  signIn: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),

  recover_password: z.object({
    email: z.string().email(),
  }),

  reset_password: z.object({
    password: z.string().min(8),
  }),
};

type AuthDto = Dto<typeof AuthSchemas>;

export { AuthSchemas, AuthDto };
