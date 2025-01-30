import { Dto } from '#/utils/types';
import { z } from 'zod';

const AuthSchemas = {
  login: z.object({
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

type LoginDto = Dto<typeof AuthSchemas>;

export { AuthSchemas, LoginDto };
